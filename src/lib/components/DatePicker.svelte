<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		value?: string;
		class?: string;
		[key: string]: any;
	}

	let { value = $bindable(''), class: className, ...rest }: Props = $props();
</script>

<input
	data-testid="date-picker"
	type="date"
	bind:value
	class={cn(
		"h-9 w-full px-3 font-mono text-xs bg-[#E8E8E4] shadow-inner border border-stone-300 rounded-sm",
		"text-matte",
		"focus:outline-none focus:ring-1 focus:ring-signal/30",
		"disabled:cursor-not-allowed disabled:opacity-50",
		"transition-colors",
		className
	)}
	{...rest}
/>
