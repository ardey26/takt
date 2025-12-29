<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		class?: string;
		[key: string]: any;
	}

	let { class: className, ...rest }: Props = $props();
</script>

<input
	type="file"
	class={cn(
		"w-full h-9 px-3 font-mono text-xs bg-[#E8E8E4] shadow-inner border border-stone-300 rounded-sm",
		"text-matte",
		"file:mr-3 file:h-full file:-ml-3 file:px-3 file:border-0 file:border-r file:border-stone-300",
		"file:bg-bone file:text-matte file:font-mono file:text-xs file:font-medium file:uppercase file:tracking-wider",
		"file:cursor-pointer file:hover:bg-stone-200 file:transition-colors",
		"focus:outline-none focus:ring-1 focus:ring-signal/30",
		"disabled:opacity-50 disabled:cursor-not-allowed",
		"transition-colors",
		className
	)}
	{...rest}
/>
