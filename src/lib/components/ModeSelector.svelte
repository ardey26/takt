<script lang="ts">
	import { cn } from '$lib/utils';

	export interface Mode {
		id: string;
		label: string;
		number: string;
	}

	export interface ModeSelectorProps {
		modes?: Mode[];
		value?: string;
		onchange?: (mode: string) => void;
		class?: string;
	}

	let { 
		modes = [
			{ id: 'logistics', label: 'Logistics', number: '01' },
			{ id: 'ledger', label: 'Ledger', number: '02' },
			{ id: 'forms', label: 'Forms', number: '03' },
			{ id: 'devops', label: 'DevOps', number: '04' },
		],
		value = 'logistics',
		onchange,
		class: className 
	}: ModeSelectorProps = $props();

	function selectMode(modeId: string) {
		if (onchange) {
			onchange(modeId);
		}
	}
</script>

<nav class={cn("flex items-center gap-1 p-1 bg-bone/50 border border-stone-300 rounded-sm", className)}>
	{#each modes as mode}
		<button
			onclick={() => selectMode(mode.id)}
			class={cn(
				"group flex items-center gap-2 px-3 py-2 rounded-sm font-mono text-[10px] tracking-wider uppercase transition-all duration-200 cursor-pointer",
				value === mode.id
					? "bg-matte text-bone shadow-sm"
					: "text-matte/60 hover:text-matte hover:bg-stone-200/50"
			)}
		>
			<span class={cn(
				"text-[9px] tabular-nums",
				value === mode.id ? "text-bone/60" : "text-matte/30"
			)}>
				{mode.number}
			</span>
			<span class="font-medium">
				{mode.label}
			</span>
		</button>
	{/each}
</nav>
