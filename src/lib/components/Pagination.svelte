<script lang="ts">
	import { cn } from '$lib/utils';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	
	export interface PaginationProps {
		currentPage?: number;
		totalPages?: number;
		siblingCount?: number;
		class?: string;
	}
	
	let { 
		currentPage = $bindable(1), 
		totalPages = 5,
		siblingCount = 1,
		class: className
	}: PaginationProps = $props();

	let highlighted = $derived(isHighlighted('pagination'));

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}

	// Generate page numbers with ellipsis for scalability
	function getPageNumbers(): (number | 'ellipsis')[] {
		const result: (number | 'ellipsis')[] = [];
		
		// For small page counts, show all pages
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				result.push(i);
			}
			return result;
		}
		
		// Always show first page
		result.push(1);
		
		// Calculate range around current page
		const leftSibling = Math.max(currentPage - siblingCount, 2);
		const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);
		
		// Show left ellipsis if there's a gap
		if (leftSibling > 2) {
			result.push('ellipsis');
		}
		
		// Show pages around current (from leftSibling to rightSibling, excluding 1 and totalPages)
		for (let i = leftSibling; i <= rightSibling; i++) {
			result.push(i);
		}
		
		// Show right ellipsis if there's a gap  
		if (rightSibling < totalPages - 1) {
			result.push('ellipsis');
		}
		
		// Always show last page
		result.push(totalPages);
		
		return result;
	}

	let pageNumbers = $derived(getPageNumbers());
</script>

<div 
	class={cn(
		"flex items-center gap-1 transition-all duration-200 rounded-sm p-1 -m-1",
		highlighted && "ring-2 ring-signal",
		className
	)}
>
	<!-- First page button -->
	<button
		onclick={() => goToPage(1)}
		disabled={currentPage === 1}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="First page"
	>
		«
	</button>
	
	<!-- Previous button -->
	<button
		onclick={() => goToPage(currentPage - 1)}
		disabled={currentPage === 1}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="Previous page"
	>
		‹
	</button>
	
	<!-- Page numbers with ellipsis -->
	{#each pageNumbers as page, i}
		{#if page === 'ellipsis'}
			<span class="w-8 h-8 flex items-center justify-center font-mono text-xs text-matte/40">
				…
			</span>
		{:else}
			<button
				onclick={() => goToPage(page)}
				class={cn(
					"w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 cursor-pointer transition-all",
					page === currentPage ? "bg-stone-200 shadow-inner font-bold" : "bg-bone hover:bg-stone-100"
				)}
				aria-current={page === currentPage ? 'page' : undefined}
			>
				{page}
			</button>
		{/if}
	{/each}
	
	<!-- Next button -->
	<button
		onclick={() => goToPage(currentPage + 1)}
		disabled={currentPage === totalPages}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="Next page"
	>
		›
	</button>
	
	<!-- Last page button -->
	<button
		onclick={() => goToPage(totalPages)}
		disabled={currentPage === totalPages}
		class="w-8 h-8 flex items-center justify-center font-mono text-xs border border-stone-300 bg-bone hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
		aria-label="Last page"
	>
		»
	</button>
</div>
