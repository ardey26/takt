<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	
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
		"flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 transition-all duration-200 rounded-sm",
		highlighted && "ring-2 ring-signal ring-offset-2",
		className
	)}
>	
	<Input 
		bind:value={searchValue}
		placeholder="Search..."
		icon="search"
		class="sm:flex-1 sm:min-w-48 [&>input]:rounded-none [&>input]:sm:rounded-l-sm [&>input]:sm:border-r-0"
	/>
	
	<Select
		bind:value={categoryValue}
		options={categories}
		class="[&>button]:rounded-none [&>button]:sm:border-r-0"
	/>

	<Button 
		label="Add Item"
		onclick={onadd}
		class="rounded-none sm:rounded-r-sm h-9"
	/>
</div>
