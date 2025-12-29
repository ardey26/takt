<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		[key: string]: any;
	}

	let { size = 'md', class: className, ...rest }: Props = $props();

	const sizes = {
		sm: 'h-4 w-4 border-2',
		md: 'h-6 w-6 border-2',
		lg: 'h-8 w-8 border-3'
	};
</script>

<div
	role="status"
	class={cn(
		"animate-spin rounded-full border-matte/30 border-t-signal",
		sizes[size],
		className
	)}
	{...rest}
>
	<span class="sr-only">Loading...</span>
</div>
