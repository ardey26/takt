<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		checked?: boolean;
		disabled?: boolean;
		class?: string;
		[key: string]: any;
	}

	let { checked = $bindable(false), disabled, class: className, ...rest }: Props = $props();
</script>

<input
	type="checkbox"
	bind:checked
	{disabled}
	class={cn(
		"h-4 w-4 appearance-none rounded-sm border border-stone-300 bg-[#E8E8E4] shadow-inner",
		"checked:bg-signal checked:border-signal checked:shadow-none",
		"disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
		"focus:outline-none focus:ring-1 focus:ring-signal/30 focus:ring-offset-1",
		"transition-all",
		className
	)}
	{...rest}
/>
