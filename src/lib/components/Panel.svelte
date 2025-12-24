<script lang="ts">
	import type { Snippet } from 'svelte';
	
	let { label = '', children }: { label: string; children: Snippet } = $props();
</script>

<div class="flex flex-col gap-1.5">
	<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase">{label}</span>
	<div class="slot rounded-sm p-3 h-40 overflow-y-auto font-mono text-xs text-matte/80 leading-relaxed">
		{@render children()}
	</div>
</div>
