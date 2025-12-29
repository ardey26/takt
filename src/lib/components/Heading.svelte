<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		children?: Snippet;
		class?: string;
	}

	let { level = 1, children, class: className }: Props = $props();

	const sizes = {
		1: 'text-3xl font-bold tracking-tight',
		2: 'text-2xl font-bold tracking-tight',
		3: 'text-xl font-bold',
		4: 'text-lg font-medium',
		5: 'text-base font-medium',
		6: 'text-sm font-medium uppercase tracking-wide'
	};
</script>

<svelte:element this={`h${level}`} class={cn('font-mono text-matte', sizes[level], className)}>
	{@render children?.()}
</svelte:element>
