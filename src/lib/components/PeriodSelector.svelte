<script lang="ts">
	import { cn } from '$lib/utils';

	export interface PeriodSelectorProps {
		periods?: string[];
		value?: string;
		class?: string;
	}

	let { 
		periods = ['1D', '1W', '1M', '3M', '1Y', 'ALL'],
		value = $bindable('1D'),
		class: className 
	}: PeriodSelectorProps = $props();
</script>

<div class={cn("flex items-center gap-0.5", className)}>
	{#each periods as period}
		<button
			onclick={() => value = period}
			class={cn(
				"px-3 py-1.5 font-mono text-[10px] font-medium tracking-wider uppercase transition-all duration-150 cursor-pointer rounded-sm",
				value === period
					? "bg-matte text-bone"
					: "text-matte/50 hover:text-matte hover:bg-stone-200/50"
			)}
		>
			{period}
		</button>
	{/each}
</div>
