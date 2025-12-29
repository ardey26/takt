<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		value?: number;
		min?: number;
		max?: number;
		step?: number;
		disabled?: boolean;
		class?: string;
		[key: string]: any;
	}

	let { value = $bindable(0), min = 0, max = 100, step = 1, disabled, class: className, ...rest }: Props = $props();
</script>

<div class={cn("relative flex items-center", className)}>
	<input
		type="range"
		bind:value
		{min}
		{max}
		{step}
		{disabled}
		class="w-full h-2 appearance-none bg-[#E8E8E4] shadow-inner border border-stone-300 rounded-full cursor-pointer
			[&::-webkit-slider-thumb]:appearance-none
			[&::-webkit-slider-thumb]:h-4
			[&::-webkit-slider-thumb]:w-4
			[&::-webkit-slider-thumb]:rounded-full
			[&::-webkit-slider-thumb]:bg-signal
			[&::-webkit-slider-thumb]:shadow-md
			[&::-webkit-slider-thumb]:cursor-pointer
			[&::-webkit-slider-thumb]:border-0
			[&::-moz-range-thumb]:h-4
			[&::-moz-range-thumb]:w-4
			[&::-moz-range-thumb]:rounded-full
			[&::-moz-range-thumb]:bg-signal
			[&::-moz-range-thumb]:shadow-md
			[&::-moz-range-thumb]:cursor-pointer
			[&::-moz-range-thumb]:border-0
			focus:outline-none disabled:opacity-50"
		{...rest}
	/>
</div>
