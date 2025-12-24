<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface TickerProps {
		value: number;
		label?: string;
		change?: number;
		prefix?: string;
		suffix?: string;
		decimals?: number;
		class?: string;
	}
	
	let { 
		value = 0,
		label = '',
		change = 0,
		prefix = '',
		suffix = '',
		decimals = 2,
		class: className
	}: TickerProps = $props();

	let formattedValue = $derived(
		new Intl.NumberFormat('en-US', { 
			minimumFractionDigits: decimals, 
			maximumFractionDigits: decimals 
		}).format(Math.abs(value))
	);

	let formattedChange = $derived(
		change !== 0 ? `${change > 0 ? '+' : ''}${change.toFixed(2)}%` : ''
	);

	let isNegative = $derived(value < 0 || change < 0);
	let isPositive = $derived(change > 0);
</script>

<div class={cn("slot p-4 rounded-sm", className)}>
	{#if label}
		<p class="font-mono text-[10px] tracking-[0.2em] text-matte/40 uppercase mb-2">
			{label}
		</p>
	{/if}
	
	<div class="flex items-baseline gap-2">
		<span 
			class={cn(
				"font-mono text-2xl font-bold tracking-tight tabular-nums",
				value < 0 ? "text-red-600" : "text-matte"
			)}
		>
			{value < 0 ? '-' : ''}{prefix}{formattedValue}{suffix}
		</span>
		
		{#if change !== 0}
			<span 
				class={cn(
					"font-mono text-xs tabular-nums",
					isPositive ? "text-matte/50" : "text-red-600"
				)}
			>
				{formattedChange}
			</span>
		{/if}
	</div>
</div>
