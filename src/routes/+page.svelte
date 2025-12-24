<script lang="ts">
	import DataTable from '$lib/components/DataTable.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PartsList from '$lib/components/PartsList.svelte';

	import { isHighlighted } from '$lib/highlightStore.svelte';

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

	function handleAdd() {
		alert('Add Item dialog would open here');
	}
</script>

<svelte:head>
	<title>Takt · Showroom 01: Logistics</title>
	<meta name="description" content="High-end Svelte component library inspired by Dieter Rams. Showroom 01 demonstrates a logistics dashboard." />
</svelte:head>

<div class="min-h-screen flex">
	<!-- Main Stage -->
	<main class="flex-1 chassis p-6">
		<!-- Header -->
		<header class="mb-6">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 01
			</p>
			<h1 class="font-mono text-xl font-bold tracking-tight text-matte">
				Global Inventory
			</h1>
		</header>

		<!-- Control Strip -->
		<div class="mb-4">
			<Toolbar 
				bind:searchValue 
				bind:categoryValue 
				{categories}
				onadd={handleAdd}
			/>
		</div>

		<!-- Datagrid -->
		<div class="bg-bone/50 border border-stone-300 rounded-sm mb-4 transition-all duration-200 {isHighlighted('datagrid') ? 'ring-2 ring-signal ring-offset-2' : ''}">
			<DataTable items={filteredData} bind:selectedIds />
		</div>

		<!-- Footer -->
		<div class="flex items-center justify-between">
			<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider">
				{selectedIds.length > 0 ? `${selectedIds.length} selected` : `${filteredData.length} items`}
			</p>
			<Pagination bind:currentPage totalPages={50} />
		</div>
	</main>

	<!-- Parts List Sidebar -->
	<PartsList />
</div>
