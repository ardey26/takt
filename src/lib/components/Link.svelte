<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { href, children, class: className, ...rest }: Props = $props();
</script>

<a
	{href}
	class={cn(
		"text-signal font-medium hover:underline transition-all decoration-signal/30 underline-offset-4 font-mono text-sm",
		className
	)}
	{...rest}
>
	{@render children?.()}
</a>
