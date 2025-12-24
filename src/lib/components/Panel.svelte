<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
	export interface PanelProps {
		label?: string;
		class?: string;
		children: Snippet;
	}
	
	let { 
		label = '', 
		class: className,
		children 
	}: PanelProps = $props();
</script>

<div class={cn("flex flex-col gap-1.5", className)}>
	<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase">{label}</span>
	<div class="slot rounded-sm p-3 font-mono text-xs text-matte/80 leading-relaxed">
		{@render children()}
	</div>
</div>
