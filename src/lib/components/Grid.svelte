<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		as?: string;
		cols?: number;
		gap?: number;
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { 
		as = 'div', 
		cols, 
		gap = 4, 
		children, 
		class: className, 
		...rest 
	}: Props = $props();
</script>

<svelte:element
	this={as}
	class={cn('grid', cols && `grid-cols-${cols}`, `gap-${gap}`, className)}
	{...rest}
>
	{@render children?.()}
</svelte:element>
