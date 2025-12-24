<script lang="ts">
	let { value = 0, label = '', variant = 'normal', compact = false }: { value: number; label: string; variant?: 'normal' | 'heat'; compact?: boolean } = $props();
	
	let segments = $derived(Math.round((value / 100) * 10));
	let jitterOffset = $state(0);
	
	$effect(() => {
		if (compact) return;
		const interval = setInterval(() => {
			jitterOffset = (Math.random() - 0.5) * 2;
		}, 150);
		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col gap-1.5">
	{#if label && !compact}
		<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase">{label}</span>
	{/if}
	<div 
		class="flex gap-0.5 rounded-sm"
		class:p-1.5={!compact}
		class:slot={!compact}
		class:p-0={compact}
		style="transform: translateX({jitterOffset}px)"
	>
		{#each Array(10) as _, i}
			<div 
				class="rounded-[1px] transition-colors duration-100"
				class:w-4={!compact}
				class:h-5={!compact}
				class:w-2={compact}
				class:h-3={compact}
				class:bg-led-on={variant === 'normal' && i < segments}
				class:bg-led-hot={variant === 'heat' && i < segments}
				class:bg-led-off={i >= segments}
			></div>
		{/each}
	</div>
</div>
