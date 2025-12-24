<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface PeriodSelectorProps {
		value?: string;
		options?: string[];
		class?: string;
	}
	
	let { 
		value = $bindable('1D'),
		options = ['1H', '1D', '1W', '1M', '1Y'],
		class: className
	}: PeriodSelectorProps = $props();
</script>

<div class={cn("inline-flex rounded-sm overflow-hidden border border-stone-300", className)}>
	{#each options as option, i}
		<button
			type="button"
			onclick={() => value = option}
			class={cn(
				"px-3 py-1.5 font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer",
				i > 0 && "border-l border-stone-300",
				value === option 
					? "bg-matte text-bone shadow-inner" 
					: "bg-bone text-matte/60 hover:bg-stone-200"
			)}
		>
			{option}
		</button>
	{/each}
</div>
