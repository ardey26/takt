<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	
	export interface ButtonProps {
		label?: string;
		class?: string;
		onclick?: () => void;
	}
	
	let { 
		label = 'ACTION', 
		class: className,
		onclick 
	}: ButtonProps = $props();
	
	let highlighted = $derived(isHighlighted('et66'));
</script>

<button 
	{onclick}
	class={cn(
		"px-5 h-9 rounded-full font-mono text-[10px] font-bold tracking-wider uppercase",
		"text-white bg-signal cursor-pointer transition-all duration-100",
		"active:scale-95 active:translate-y-px shadow-md hover:shadow-lg hover:brightness-110",
		"flex items-center justify-center gap-2",
		highlighted && "ring-2 ring-signal ring-offset-2",
		className
	)}
	style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 40%, rgba(0,0,0,0.15))"
>
	{label}
</button>
