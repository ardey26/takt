<script lang="ts">
	import { cn } from '$lib/utils';
	import Tag from './Tag.svelte';
	import Meter from './Meter.svelte';
	import { isHighlighted } from '$lib/highlightStore.svelte';
	
	export interface DataTableItem {
		id: string;
		sku: string;
		name: string;
		category: string;
		stock: number;
		maxStock: number;
		status: 'in-stock' | 'low-stock' | 'out-of-stock';
		price: number;
	}
	
	export interface DataTableProps {
		items?: DataTableItem[];
		selectedIds?: string[];
		class?: string;
	}
	
	let { 
		items = [],
		selectedIds = $bindable<string[]>([]),
		class: className
	}: DataTableProps = $props();

	let highlighted = $derived(isHighlighted('datagrid'));
	let allSelected = $derived(items.length > 0 && selectedIds.length === items.length);

	function toggleAll() {
		if (allSelected) {
			selectedIds = [];
		} else {
			selectedIds = items.map(item => item.id);
		}
	}

	function toggleItem(id: string) {
		if (selectedIds.includes(id)) {
			selectedIds = selectedIds.filter(i => i !== id);
		} else {
			selectedIds = [...selectedIds, id];
		}
	}

	function formatPrice(price: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
	}

	function getStockPercentage(stock: number, max: number): number {
		return Math.round((stock / max) * 100);
	}
</script>

<div 
	class={cn(
		"overflow-x-auto transition-all duration-200 rounded-sm",
		highlighted && "ring-2 ring-signal ring-offset-2",
		className
	)}
>
	<table class="w-full border-collapse border border-stone-300 text-sm whitespace-nowrap">
		<thead>
			<tr class="bg-[#E6E6E2]">
				<th class="w-10 py-2 px-3 border border-stone-300 text-center">
					<input 
						type="checkbox" 
						checked={allSelected}
						onchange={toggleAll}
						class="w-4 h-4 cursor-pointer accent-signal"
					/>
				</th>
				<th class="py-2 px-3 border border-stone-300 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70">SKU</th>
				<th class="py-2 px-3 border border-stone-300 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70">Product Name</th>
				<th class="py-2 px-3 border border-stone-300 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70 w-32">Stock Level</th>
				<th class="py-2 px-3 border border-stone-300 text-center text-[10px] font-bold uppercase tracking-wider text-matte/70">Status</th>
				<th class="py-2 px-3 border border-stone-300 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">Price</th>
			</tr>
		</thead>
		<tbody>
			{#each items as item (item.id)}
				<tr class="hover:bg-stone-100 transition-colors">
					<td class="py-2 px-3 border border-stone-300 text-center">
						<input 
							type="checkbox" 
							checked={selectedIds.includes(item.id)}
							onchange={() => toggleItem(item.id)}
							class="w-4 h-4 cursor-pointer accent-signal"
						/>
					</td>
					<td class="py-2 px-3 border border-stone-300 font-mono text-xs text-matte/80">{item.sku}</td>
					<td class="py-2 px-3 border border-stone-300 font-sans text-xs text-matte">{item.name}</td>
					<td class="py-2 px-3 border border-stone-300">
						<Meter value={getStockPercentage(item.stock, item.maxStock)} compact={true} />
					</td>
					<td class="py-2 px-3 border border-stone-300 text-center">
						<Tag variant={item.status} label={item.status.replace('-', ' ')} />
					</td>
					<td class="py-2 px-3 border border-stone-300 font-mono text-xs text-right text-matte">{formatPrice(item.price)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
