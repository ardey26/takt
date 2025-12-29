<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		as?: string;
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { as = 'div', children, class: className, ...rest }: Props = $props();
</script>

<svelte:element
	this={as}
	class={cn(className)}
	{...rest}
>
	{@render children?.()}
</svelte:element>
