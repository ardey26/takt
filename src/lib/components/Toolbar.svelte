<script lang="ts">
	let { 
		searchValue = $bindable(''),
		categoryValue = $bindable('all'),
		categories = ['all', 'electronics', 'mechanical', 'cables', 'hardware'],
		onexport = () => {}
	}: { 
		searchValue: string;
		categoryValue: string;
		categories: string[];
		onexport?: () => void;
	} = $props();
</script>

<div class="flex items-stretch">
	<!-- Search Input (Recessed Slot) -->
	<div class="relative flex-1 min-w-48">
		<input
			type="text"
			bind:value={searchValue}
			placeholder="Search inventory..."
			class="w-full h-9 px-3 font-mono text-xs slot border border-stone-300 border-r-0 focus:outline-none focus:ring-1 focus:ring-signal/30 placeholder:text-matte/30"
		/>
		<svg class="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-matte/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	</div>
	
	<!-- Category Select -->
	<select
		bind:value={categoryValue}
		class="h-9 px-3 font-mono text-xs bg-bone border border-stone-300 border-r-0 cursor-pointer focus:outline-none focus:ring-1 focus:ring-signal/30 text-matte/70 uppercase"
	>
		{#each categories as category}
			<option value={category}>{category}</option>
		{/each}
	</select>
	
	<!-- Export Button -->
	<button
		onclick={onexport}
		class="h-9 px-4 font-mono text-[10px] font-semibold uppercase tracking-wider bg-stone-200 border border-stone-300 hover:bg-stone-300 cursor-pointer transition-colors flex items-center gap-2"
	>
		<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
		</svg>
		Export
	</button>
</div>
