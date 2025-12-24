<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface ToggleProps {
		checked?: boolean;
		label?: string;
		class?: string;
	}
	
	let { 
		checked = $bindable(false), 
		label = '',
		class: className
	}: ToggleProps = $props();
</script>

<div class={cn("flex items-center gap-3", className)}>
	<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase w-16">{label}</span>
	<button 
		onclick={() => checked = !checked}
		class="relative w-14 h-7 slot rounded-sm cursor-pointer transition-all duration-150 active:scale-95"
		role="switch"
		aria-checked={checked}
		aria-label={`Toggle ${label}`}
	>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="w-px h-3 bg-matte/20"></div>
		</div>
		<div 
			class={cn(
				"absolute top-0.5 w-6 h-6 rounded-sm transition-all duration-150 shadow-sm flex items-center justify-center",
				checked ? "left-7 bg-signal" : "left-0.5 bg-stone-300"
			)}
			style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)"
		>
			<div class="w-px h-2.5 bg-matte/30 rounded-full"></div>
		</div>
	</button>
	<span 
		class={cn(
			"text-[9px] font-mono font-medium tracking-wider",
			checked ? "text-signal" : "text-stone-400"
		)}
	>
		{checked ? 'ON' : 'OFF'}
	</span>
</div>
