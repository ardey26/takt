<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
	interface Props {
		variant?: 'default' | 'destructive' | 'warning' | 'success';
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { variant = 'default', children, class: className, ...rest }: Props = $props();

	const variants = {
		default: 'bg-surface border-matte text-matte',
		destructive: 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-500',
		warning: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-500',
		success: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-500'
	};
</script>

<div
	role="alert"
	class={cn(
		"relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-matte [&>svg~*]:pl-7",
		variants[variant],
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
