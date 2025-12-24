<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
	export interface SurfaceProps {
		variant?: 'paper' | 'chassis' | 'slot';
		class?: string;
		children: Snippet;
	}
	
	let { 
		variant = 'paper',
		class: className,
		children
	}: SurfaceProps = $props();
	
	const variantClasses = {
		paper: 'bg-[#FAFAF6] shadow-md',
		chassis: 'chassis',
		slot: 'slot'
	};
</script>

<div class={cn("rounded-sm", variantClasses[variant], className)}>
	{@render children()}
</div>
