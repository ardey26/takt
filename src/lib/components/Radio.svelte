<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		group?: any;
		value: any;
		disabled?: boolean;
		class?: string;
		[key: string]: any;
	}

	let { group = $bindable(), value, disabled, class: className, ...rest }: Props = $props();
</script>

<input
	type="radio"
	bind:group
	{value}
	{disabled}
	class={cn(
		"h-4 w-4 appearance-none rounded-full border border-stone-300 bg-[#E8E8E4] shadow-inner",
		"checked:bg-signal checked:border-signal checked:shadow-none",
		"disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
		"focus:outline-none focus:ring-1 focus:ring-signal/30 focus:ring-offset-1",
		"transition-all",
		className
	)}
	{...rest}
/>
