<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface SelectOption {
		value: string;
		label: string;
	}
	
	export interface SelectProps {
		value?: string;
		options?: SelectOption[] | string[];
		class?: string;
	}
	
	let { 
		value = $bindable(''),
		options = [],
		class: className
	}: SelectProps = $props();

	let isOpen = $state(false);
	let containerRef: HTMLDivElement;

	let normalizedOptions = $derived(
		options.map(opt => 
			typeof opt === 'string' ? { value: opt, label: opt } : opt
		)
	);

	let selectedLabel = $derived(
		normalizedOptions.find(opt => opt.value === value)?.label || value
	);

	function toggle() {
		isOpen = !isOpen;
	}

	function select(optValue: string) {
		value = optValue;
		isOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		if (containerRef && !containerRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isOpen = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<div bind:this={containerRef} class={cn("relative", className)}>
	<button
		type="button"
		onclick={toggle}
		class="h-9 px-3 font-mono text-xs bg-bone border border-stone-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-signal/30 text-matte/70 uppercase flex items-center gap-2 rounded-sm min-w-24"
	>
		<span class="flex-1 text-left truncate">{selectedLabel}</span>
		<svg 
			class={cn("w-3 h-3 text-matte/50 transition-transform", isOpen && "rotate-180")} 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	
	{#if isOpen}
		<div class="absolute top-full left-0 mt-1 w-full min-w-32 bg-bone border border-stone-300 rounded-sm shadow-lg z-50 overflow-hidden">
			{#each normalizedOptions as option}
				<button
					type="button"
					onclick={() => select(option.value)}
					class={cn(
						"w-full px-3 py-2 text-left font-mono text-xs uppercase text-matte/70 hover:bg-stone-200 transition-colors cursor-pointer",
						option.value === value && "bg-stone-200 text-matte"
					)}
				>
					{option.label}
				</button>
			{/each}
		</div>
	{/if}
</div>
