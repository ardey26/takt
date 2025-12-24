<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	
	export interface TagProps {
		variant?: 'in-stock' | 'low-stock' | 'out-of-stock';
		label?: string;
		class?: string;
	}
	
	let { 
		variant = 'in-stock', 
		label = '',
		class: className
	}: TagProps = $props();

	let highlighted = $derived(isHighlighted('tag'));
</script>

<span 
	class={cn(
		"inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wide rounded-sm transition-all duration-200",
		variant === 'in-stock' && "bg-green-100 text-green-800",
		variant === 'low-stock' && "bg-amber-100 text-amber-800",
		variant === 'out-of-stock' && "bg-red-100 text-red-800",
		highlighted && "ring-2 ring-signal",
		className
	)}
>
	{label}
</span>
