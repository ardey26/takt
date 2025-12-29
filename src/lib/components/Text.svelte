<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		as?: 'p' | 'span' | 'div' | 'label';
		variant?: 'body' | 'muted' | 'signal' | 'precise';
		children?: Snippet;
		class?: string;
	}

	let { as = 'p', variant = 'body', children, class: className }: Props = $props();

	const variants = {
		body: 'text-sm text-matte font-mono leading-normal',
		muted: 'text-sm text-matte/60 font-mono leading-normal',
		signal: 'text-sm text-signal font-mono font-medium',
		precise: 'text-xs text-matte font-mono tabular-nums'
	};
</script>

<svelte:element this={as} class={cn(variants[variant], className)}>
	{@render children?.()}
</svelte:element>
