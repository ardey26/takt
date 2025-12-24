<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface PlotDataPoint {
		label?: string;
		value: number;
	}
	
	export interface PlotProps {
		data?: PlotDataPoint[];
		type?: 'bar' | 'step';
		height?: number;
		class?: string;
	}
	
	let { 
		data = [],
		type = 'bar',
		height = 120,
		class: className
	}: PlotProps = $props();

	let maxValue = $derived(Math.max(...data.map(d => Math.abs(d.value)), 1));
	let minValue = $derived(Math.min(...data.map(d => d.value), 0));
	let hasNegative = $derived(minValue < 0);
	let range = $derived(maxValue - minValue);
	
	function getBarHeight(value: number): number {
		return (Math.abs(value) / range) * 100;
	}
	
	function getBarY(value: number): number {
		if (!hasNegative) return 100 - getBarHeight(value);
		const zeroLine = (maxValue / range) * 100;
		if (value >= 0) return zeroLine - getBarHeight(value);
		return zeroLine;
	}

	function getStepPath(): string {
		if (data.length === 0) return '';
		const stepWidth = 100 / data.length;
		let path = '';
		data.forEach((point, i) => {
			const x = i * stepWidth;
			const y = 100 - ((point.value - minValue) / range) * 100;
			if (i === 0) {
				path += `M ${x} ${y}`;
			} else {
				path += ` H ${x} V ${y}`;
			}
		});
		path += ` H 100`;
		return path;
	}
</script>

<div class={cn("slot p-4 rounded-sm", className)}>
	<svg 
		viewBox="0 0 100 100" 
		preserveAspectRatio="none"
		style="height: {height}px"
		class="w-full"
	>
		{#if hasNegative}
			<line 
				x1="0" 
				y1="{(maxValue / range) * 100}" 
				x2="100" 
				y2="{(maxValue / range) * 100}" 
				stroke="currentColor" 
				stroke-opacity="0.2"
				stroke-width="0.5"
			/>
		{/if}
		
		{#if type === 'bar'}
			{#each data as point, i}
				{@const barWidth = 80 / data.length}
				{@const gap = 20 / data.length}
				{@const x = i * (barWidth + gap) + gap / 2}
				<rect
					{x}
					y="{getBarY(point.value)}"
					width="{barWidth}"
					height="{getBarHeight(point.value)}"
					class={cn(
						point.value < 0 ? "fill-red-600" : "fill-matte/60"
					)}
				/>
			{/each}
		{:else}
			<path
				d={getStepPath()}
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				class="text-matte/60"
				vector-effect="non-scaling-stroke"
			/>
		{/if}
	</svg>
	
	{#if data.some(d => d.label)}
		<div class="flex justify-between mt-2">
			{#each data as point}
				<span class="font-mono text-[8px] text-matte/30 uppercase">
					{point.label || ''}
				</span>
			{/each}
		</div>
	{/if}
</div>
