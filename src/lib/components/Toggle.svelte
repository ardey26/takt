<script lang="ts">
	let { checked = $bindable(false), label = '' }: { checked: boolean; label: string } = $props();
</script>

<div class="flex items-center gap-3">
	<span class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase w-16">{label}</span>
	<button 
		onclick={() => checked = !checked}
		class="relative w-14 h-7 slot rounded-sm cursor-pointer transition-all duration-150 active:scale-95"
		aria-pressed={checked}
		aria-label={`Toggle ${label}`}
	>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="w-px h-3 bg-matte/20"></div>
		</div>
		<div 
			class="absolute top-0.5 w-6 h-6 rounded-sm transition-all duration-150 shadow-sm flex items-center justify-center"
			class:left-0.5={!checked}
			class:left-7={checked}
			class:bg-stone-300={!checked}
			class:bg-signal={checked}
			style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)"
		>
			<div class="w-px h-2.5 bg-matte/30 rounded-full"></div>
		</div>
	</button>
	<span 
		class="text-[9px] font-mono font-medium tracking-wider"
		class:text-signal={checked}
		class:text-stone-400={!checked}
	>
		{checked ? 'ON' : 'OFF'}
	</span>
</div>
