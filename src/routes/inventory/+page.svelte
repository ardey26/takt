<script lang="ts">
	import DataTable from '$lib/components/DataTable.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Avatar from '$lib/components/Avatar.svelte';

	let searchValue = $state('');
	let categoryValue = $state('all');
	let currentPage = $state(1);
	let selectedIds = $state<string[]>([]);

	const inventoryData = [
		{ id: '1', sku: 'MB-2048', name: 'Modular Bracket Assembly', category: 'hardware', stock: 156, maxStock: 200, status: 'in-stock' as const, price: 24.99 },
		{ id: '2', sku: 'SM-9000', name: 'Servo Motor 9000 Series', category: 'electronics', stock: 12, maxStock: 50, status: 'low-stock' as const, price: 189.50 },
		{ id: '3', sku: 'CB-CAT6', name: 'Industrial CAT6 Cable (100m)', category: 'cables', stock: 89, maxStock: 100, status: 'in-stock' as const, price: 75.00 },
		{ id: '4', sku: 'PS-750W', name: 'Power Supply Unit 750W', category: 'electronics', stock: 8, maxStock: 40, status: 'low-stock' as const, price: 145.00 },
		{ id: '5', sku: 'AL-FRAME', name: 'Aluminum Extrusion Frame', category: 'mechanical', stock: 234, maxStock: 250, status: 'in-stock' as const, price: 56.25 },
		{ id: '6', sku: 'SN-TEMP', name: 'Temperature Sensor Module', category: 'electronics', stock: 0, maxStock: 100, status: 'out-of-stock' as const, price: 32.00 },
		{ id: '7', sku: 'BT-M8X20', name: 'Stainless Steel Bolt M8x20', category: 'hardware', stock: 1500, maxStock: 2000, status: 'in-stock' as const, price: 0.45 },
		{ id: '8', sku: 'PB-CTRL', name: 'Programmable Logic Controller', category: 'electronics', stock: 5, maxStock: 25, status: 'low-stock' as const, price: 420.00 },
	];

	const categories = ['all', 'electronics', 'mechanical', 'cables', 'hardware'];

	let filteredData = $derived(
		inventoryData.filter(item => {
			const matchesSearch = item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				item.sku.toLowerCase().includes(searchValue.toLowerCase());
			const matchesCategory = categoryValue === 'all' || item.category === categoryValue;
			return matchesSearch && matchesCategory;
		})
	);

	function handleExport() {
		alert('Exporting inventory data...');
	}
</script>

<svelte:head>
	<title>Global Inventory | Warehouse Level 04</title>
	<meta name="description" content="Industrial inventory management dashboard - Warehouse Level 04" />
</svelte:head>

<main class="min-h-screen chassis">
	<!-- Top Bar -->
	<header class="flex items-center justify-between px-6 py-3 border-b border-stone-300 bg-bone/80">
		<nav class="flex items-center gap-2 text-[11px] font-mono text-matte/50">
			<a href="/" class="hover:text-matte transition-colors">Home</a>
			<span>/</span>
			<span>Logistics</span>
			<span>/</span>
			<span class="text-matte font-medium">Inventory</span>
		</nav>
		<Avatar initials="AD" name="Andre de Jesus" />
	</header>

	<!-- Page Content -->
	<div class="p-6 md:p-10">
		<!-- Page Header -->
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
			<div>
				<h1 class="font-mono text-2xl font-bold tracking-tight text-matte">Global Inventory</h1>
				<p class="font-mono text-[11px] tracking-[0.15em] text-matte/40 uppercase mt-1">
					Warehouse Level 04 · {filteredData.length} items
				</p>
			</div>
			<Toolbar 
				bind:searchValue 
				bind:categoryValue 
				{categories}
				onexport={handleExport}
			/>
		</div>

		<!-- Data Table -->
		<div class="bg-bone/50 border border-stone-300 rounded-sm overflow-hidden mb-6">
			<DataTable items={filteredData} bind:selectedIds />
		</div>

		<!-- Footer with Pagination -->
		<div class="flex items-center justify-between">
			<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider">
				{selectedIds.length > 0 ? `${selectedIds.length} selected` : 'No selection'}
			</p>
			<Pagination bind:currentPage totalPages={3} />
		</div>
	</div>

	<!-- Footer -->
	<footer class="mt-auto py-6 border-t border-stone-200">
		<p class="font-mono text-[9px] tracking-[0.15em] text-matte/30 uppercase text-center">
			Andeus UI · Industrial Component Library · Less but better
		</p>
	</footer>
</main>
