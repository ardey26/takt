<script lang="ts">
	import DataTable from '$lib/components/DataTable.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PartsList from '$lib/components/PartsList.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Divider from '$lib/components/Divider.svelte';

	import { isHighlighted } from '$lib/highlightStore.svelte';

	let searchValue = $state('');
	let categoryValue = $state('all');
	let currentPage = $state(1);
	let selectedIds = $state<string[]>([]);

	let cpuValue = $state(45);
	let ramValue = $state(62);

	$effect(() => {
		const interval = setInterval(() => {
			cpuValue = Math.floor(Math.random() * 40) + 30;
			ramValue = Math.floor(Math.random() * 50) + 40;
		}, 500);
		return () => clearInterval(interval);
	});

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

	const parts = [
		{ 
			id: 'datagrid', 
			name: 'DataTable', 
			desc: 'Data table with grid borders',
			importSnippet: `import DataTable from '$lib/components/DataTable.svelte';`,
			usageSnippet: `<DataTable items={data} bind:selectedIds />`,
			children: ['Meter', 'Tag', 'Checkbox']
		},
		{ 
			id: 'controlstrip', 
			name: 'Toolbar', 
			desc: 'Search, filter, and actions',
			importSnippet: `import Toolbar from '$lib/components/Toolbar.svelte';`,
			usageSnippet: `<Toolbar bind:searchValue bind:categoryValue {categories} onadd={handleAdd} />`,
			children: ['Input', 'Select', 'Button']
		},
		{ 
			id: 'meter', 
			name: 'Meter', 
			desc: 'Segmented progress bar',
			importSnippet: `import Meter from '$lib/components/Meter.svelte';`,
			usageSnippet: `<Meter value={75} segments={5} />`
		},
		{ 
			id: 'et66', 
			name: 'Button', 
			desc: 'Primary action button',
			importSnippet: `import Button from '$lib/components/Button.svelte';`,
			usageSnippet: `<Button label="Action" onclick={() => {}} />`
		},
		{ 
			id: 'tag', 
			name: 'Tag', 
			desc: 'Status badge',
			importSnippet: `import Tag from '$lib/components/Tag.svelte';`,
			usageSnippet: `<Tag status="in-stock" />`
		},
		{ 
			id: 'pagination', 
			name: 'Pagination', 
			desc: 'Page navigation',
			importSnippet: `import Pagination from '$lib/components/Pagination.svelte';`,
			usageSnippet: `<Pagination bind:currentPage totalPages={10} />`
		},
	];
</script>

<section class="min-h-[50vh] chassis flex items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 01
			</p>
			<h1 class="font-mono text-2xl font-bold tracking-tight text-matte mb-2">
				Logistics
			</h1>
			<p class="font-mono text-xs text-matte/50">
				Industrial inventory management
			</p>
		</div>
	</Panel>
</section>

<Divider text="// Global Inventory" />

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<header class="mb-6">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				System Module
			</p>
			<h2 class="font-mono text-xl font-bold tracking-tight text-matte">
				Inventory Grid
			</h2>
		</header>

		<div class="mb-4">
			<Toolbar 
				bind:searchValue 
				bind:categoryValue 
				{categories}
				onadd={handleAdd}
			/>
		</div>

		<div class="bg-bone/50 border border-stone-300 rounded-sm mb-4 transition-all duration-200 overflow-x-auto {isHighlighted('datagrid') ? 'ring-2 ring-signal ring-offset-2' : ''}">
			<DataTable items={filteredData} bind:selectedIds />
		</div>

		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
			<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider">
				{selectedIds.length > 0 ? `${selectedIds.length} selected` : `${filteredData.length} items`}
			</p>
			<Pagination bind:currentPage totalPages={50} />
		</div>
	</main>

	<div class="hidden lg:block sticky top-0 h-screen">
		<PartsList {parts} showroomNumber="01" showroomName="Logistics" class="h-full overflow-y-auto" />
	</div>
</section>
