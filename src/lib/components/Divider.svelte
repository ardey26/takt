<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface DividerProps {
		text?: string;
		class?: string;
	}
	
	let { 
		text = '',
		class: className
	}: DividerProps = $props();
</script>

{#if text}
	<div class={cn("chassis border-t border-stone-300 relative", className)}>
		<div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-inherit px-4">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/30 uppercase whitespace-nowrap">
				{text}
			</p>
		</div>
		<div></div>
	</div>
{:else}
	<div class={cn("chassis border-t border-stone-300", className)}></div>
{/if}
