<script lang="ts">
	import { cn } from '$lib/utils';

	export type Mode = 'logistics' | 'settings' | 'ledger' | 'devops';

	export interface ModeSelectorProps {
		value: Mode;
		onchange?: (mode: Mode) => void;
		class?: string;
	}

	let { value, onchange, class: className }: ModeSelectorProps = $props();

	const modes: { id: Mode; label: string }[] = [
		{ id: 'logistics', label: 'LOGISTICS' },
		{ id: 'settings', label: 'SETTINGS' },
		{ id: 'ledger', label: 'LEDGER' },
		{ id: 'devops', label: 'DEVOPS' },
	];

	function handleClick(mode: Mode) {
		onchange?.(mode);
	}
</script>

<div 
	class={cn("inline-flex rounded-sm overflow-hidden border border-stone-300", className)}
	role="radiogroup"
	aria-label="Mode selector"
>
	{#each modes as mode, i}
		{@const isActive = value === mode.id}
		{@const isFirst = i === 0}
		{@const isLast = i === modes.length - 1}
		<button
			type="button"
			role="radio"
			aria-checked={isActive}
			onclick={() => handleClick(mode.id)}
			class={cn(
				"relative px-4 py-2 font-mono text-[10px] font-bold tracking-[0.15em] uppercase cursor-pointer transition-all duration-75",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-inset",
				!isFirst && "border-l border-stone-300",
				isActive 
					? "bg-stone-200 text-matte shadow-inner translate-y-[1px]"
					: "bg-bone text-stone-500 shadow-sm border-b-2 border-stone-200 hover:text-matte hover:bg-stone-100"
			)}
		>
			{mode.label}
		</button>
	{/each}
</div>
