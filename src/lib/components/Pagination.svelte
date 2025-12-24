<script lang="ts">
	let { 
		currentPage = $bindable(1), 
		totalPages = 5 
	}: { 
		currentPage: number; 
		totalPages: number 
	} = $props();

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}
</script>

<div class="flex items-center gap-1">
	<button
		onclick={() => goToPage(currentPage - 1)}
		disabled={currentPage === 1}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="Previous page"
	>
		‹
	</button>
	
	{#each Array.from({ length: totalPages }, (_, i) => i + 1) as page}
		<button
			onclick={() => goToPage(page)}
			class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 cursor-pointer transition-all"
			class:bg-stone-200={page === currentPage}
			class:shadow-inner={page === currentPage}
			class:bg-bone={page !== currentPage}
			class:hover:bg-stone-100={page !== currentPage}
			aria-current={page === currentPage ? 'page' : undefined}
		>
			{page}
		</button>
	{/each}
	
	<button
		onclick={() => goToPage(currentPage + 1)}
		disabled={currentPage === totalPages}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="Next page"
	>
		›
	</button>
</div>
