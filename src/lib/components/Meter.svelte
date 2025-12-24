<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	
	export interface MeterProps {
		value?: number;
		label?: string;
		variant?: 'normal' | 'heat';
		compact?: boolean;
		class?: string;
	}
	
	let { 
		value = 0, 
		label = '', 
		variant = 'normal', 
		compact = false,
		class: className
	}: MeterProps = $props();
	
	let segments = $derived(Math.round((value / 100) * 10));
	let jitterOffset = $state(0);
	let highlighted = $derived(isHighlighted('meter'));
	
	$effect(() => {
		if (compact) return;
		const interval = setInterval(() => {
			jitterOffset = (Math.random() - 0.5) * 2;
		}, 150);
		return () => clearInterval(interval);
	});
</script>

<div 
	class={cn(
		"flex flex-col gap-1.5 transition-all duration-200",
		highlighted && !compact && "ring-2 ring-signal ring-offset-1",
		className
	)}
>
	{#if label && !compact}
		<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase">{label}</span>
	{/if}
	<div 
		class={cn(
			"flex gap-0.5 rounded-sm",
			compact ? "p-0" : "p-1.5 slot",
			highlighted && compact && "ring-1 ring-signal"
		)}
		style="transform: translateX({jitterOffset}px)"
	>
		{#each Array(10) as _, i}
			<div 
				class={cn(
					"rounded-[1px] transition-colors duration-100",
					compact ? "w-2 h-3" : "w-4 h-5",
					variant === 'normal' && i < segments && "bg-led-on",
					variant === 'heat' && i < segments && "bg-led-hot",
					i >= segments && "bg-led-off"
				)}
			></div>
		{/each}
	</div>
</div>
