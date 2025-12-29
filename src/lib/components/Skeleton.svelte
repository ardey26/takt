<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		class?: string;
		[key: string]: any;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<div
	data-testid="skeleton"
	class={cn("animate-pulse rounded-md bg-matte/10", className)}
	{...rest}
></div>
