<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		value?: string;
		placeholder?: string;
		rows?: number;
		class?: string;
		[key: string]: any;
	}

	let { value = $bindable(''), placeholder, rows = 3, class: className, ...rest }: Props = $props();
</script>

<textarea
	bind:value
	{placeholder}
	{rows}
	class={cn(
		"w-full px-3 py-2 font-mono text-xs bg-[#E8E8E4] shadow-inner border border-stone-300 rounded-sm",
		"placeholder:text-matte/30 text-matte",
		"focus:outline-none focus:ring-1 focus:ring-signal/30",
		"disabled:opacity-50 disabled:cursor-not-allowed",
		"transition-colors resize-y",
		className
	)}
	{...rest}
></textarea>
