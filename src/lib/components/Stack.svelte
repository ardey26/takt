<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		as?: string;
		direction?: 'col' | 'row' | 'col-reverse' | 'row-reverse';
		gap?: number;
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { 
		as = 'div', 
		direction = 'col', 
		gap = 2, 
		children, 
		class: className, 
		...rest 
	}: Props = $props();

	const directionClasses = {
		col: 'flex-col',
		row: 'flex-row',
		'col-reverse': 'flex-col-reverse',
		'row-reverse': 'flex-row-reverse'
	};
	const classes = cn('flex', directionClasses[direction], `gap-${gap}`, className);
</script>

<svelte:element
	this={as}
	class={classes}
	{...rest}
>
	{@render children?.()}
</svelte:element>
