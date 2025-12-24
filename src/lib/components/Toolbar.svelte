<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	import Button from './Button.svelte';
	
	export interface ToolbarProps {
		searchValue?: string;
		categoryValue?: string;
		categories?: string[];
		class?: string;
		onadd?: () => void;
	}
	
	let { 
		searchValue = $bindable(''),
		categoryValue = $bindable('all'),
		categories = ['all', 'electronics', 'mechanical', 'cables', 'hardware'],
		class: className,
		onadd = () => {}
	}: ToolbarProps = $props();

	let highlighted = $derived(isHighlighted('controlstrip'));
</script>

<div 
	class={cn(
		"flex items-stretch transition-all duration-200 rounded-sm",
		highlighted && "ring-2 ring-signal ring-offset-2",
		className
	)}
>
	<!-- Slot Input (Recessed) -->
	<div class="relative flex-1 min-w-48">
		<input
			type="text"
			bind:value={searchValue}
			placeholder="Search..."
			class="w-full h-9 px-3 font-mono text-xs bg-[#E8E8E4] shadow-inner border border-stone-300 border-r-0 focus:outline-none focus:ring-1 focus:ring-signal/30 placeholder:text-matte/30 rounded-l-sm"
		/>
		<svg class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-matte/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	</div>
	
	<!-- Rolodex (Category Select) -->
	<select
		bind:value={categoryValue}
		class="h-9 px-3 font-mono text-xs bg-bone border border-stone-300 border-r-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-signal/30 text-matte/70 uppercase"
	>
		{#each categories as category}
			<option value={category}>{category}</option>
		{/each}
	</select>
	
	<!-- ET66 Trigger (Add Item) - Using Button component -->
	<Button 
		label="Add Item"
		onclick={onadd}
		class="rounded-none rounded-r-sm h-9"
	/>
</div>
