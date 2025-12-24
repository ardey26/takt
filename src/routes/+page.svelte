<script lang="ts">
	import DataTable from '$lib/components/DataTable.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PartsList from '$lib/components/PartsList.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Button from '$lib/components/Button.svelte';
	import Panel from '$lib/components/Panel.svelte';

	import { isHighlighted } from '$lib/highlightStore.svelte';

	let searchValue = $state('');
	let categoryValue = $state('all');
	let currentPage = $state(1);
	let selectedIds = $state<string[]>([]);

	let cpuValue = $state(45);
	let ramValue = $state(62);
	let demoSection: HTMLElement;

	$effect(() => {
		const interval = setInterval(() => {
			cpuValue = Math.floor(Math.random() * 40) + 30;
			ramValue = Math.floor(Math.random() * 50) + 40;
		}, 500);
		return () => clearInterval(interval);
	});

	function scrollToDemo() {
		demoSection?.scrollIntoView({ behavior: 'smooth' });
	}

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

<section class="h-[80vh] chassis flex flex-col items-center justify-center relative px-4">
	<Panel class="mb-10">
		<div class="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
			<div class="text-center mb-2">
				<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
					System Monitor
				</p>
				<h1 class="font-mono text-2xl font-bold tracking-tight text-matte">
					Vitals
				</h1>
			</div>
			<div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
				<Meter value={cpuValue} label="CPU Load" />
				<Meter value={ramValue} label="RAM Usage" variant="heat" />
			</div>
		</div>
	</Panel>

	<button
		onclick={scrollToDemo}
		class="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-signal text-white font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1"
		style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent 50%, rgba(0,0,0,0.2))"
	>
		<svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
		</svg>
		Initialize<br/>System
	</button>

	<div class="absolute bottom-8 flex flex-col items-center gap-2 text-matte/30 animate-bounce">
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</section>

<div class="chassis border-t border-stone-300 py-3">
	<p class="font-mono text-[10px] tracking-[0.3em] text-matte/30 uppercase text-center">
		// System Modules
	</p>
</div>

<section bind:this={demoSection} class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<header class="mb-6">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 01
			</p>
			<h1 class="font-mono text-xl font-bold tracking-tight text-matte">
				Global Inventory
			</h1>
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
		<PartsList class="h-full overflow-y-auto" />
	</div>
</section>
