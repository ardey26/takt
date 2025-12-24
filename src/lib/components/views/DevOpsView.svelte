<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import PartsList from '$lib/components/PartsList.svelte';

	import { isHighlighted } from '$lib/highlightStore.svelte';

	let cpuLoad = $state(42);
	let memoryUsage = $state(67);
	let diskUsage = $state(34);
	let networkIO = $state(23);

	$effect(() => {
		const interval = setInterval(() => {
			cpuLoad = Math.floor(Math.random() * 30) + 30;
			memoryUsage = Math.floor(Math.random() * 30) + 50;
			diskUsage = Math.floor(Math.random() * 20) + 25;
			networkIO = Math.floor(Math.random() * 40) + 10;
		}, 2000);
		return () => clearInterval(interval);
	});

	const parts = [
		{ 
			id: 'meter', 
			name: 'Meter', 
			desc: 'Segmented progress bar',
			importSnippet: `import Meter from '$lib/components/Meter.svelte';`,
			usageSnippet: `<Meter value={75} label="CPU Load" variant="heat" />`
		},
		{ 
			id: 'panel', 
			name: 'Panel', 
			desc: 'Content container',
			importSnippet: `import Panel from '$lib/components/Panel.svelte';`,
			usageSnippet: `<Panel>Content here</Panel>`
		},
		{ 
			id: 'divider', 
			name: 'Divider', 
			desc: 'Section separator',
			importSnippet: `import Divider from '$lib/components/Divider.svelte';`,
			usageSnippet: `<Divider text="// Section" />`
		},
	];
</script>

<section class="min-h-[50vh] chassis flex flex-col items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 04
			</p>
			<h1 class="font-mono text-2xl font-bold tracking-tight text-matte mb-2">
				DevOps Console
			</h1>
			<p class="font-mono text-xs text-matte/50">
				Infrastructure monitoring & operations
			</p>
		</div>
	</Panel>
</section>

<Divider text="// System Resources" />

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<div class="max-w-2xl mx-auto">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 transition-all duration-200 {isHighlighted('meter') ? 'ring-2 ring-signal ring-offset-2 rounded-sm' : ''}">
				<div class="p-4 bg-bone/50 border border-stone-300 rounded-sm">
					<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider mb-3">CPU Load</p>
					<Meter value={cpuLoad} label="" />
				</div>
				<div class="p-4 bg-bone/50 border border-stone-300 rounded-sm">
					<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider mb-3">Memory</p>
					<Meter value={memoryUsage} label="" variant="heat" />
				</div>
				<div class="p-4 bg-bone/50 border border-stone-300 rounded-sm">
					<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider mb-3">Disk I/O</p>
					<Meter value={diskUsage} label="" />
				</div>
				<div class="p-4 bg-bone/50 border border-stone-300 rounded-sm">
					<p class="font-mono text-[10px] text-matte/40 uppercase tracking-wider mb-3">Network</p>
					<Meter value={networkIO} label="" />
				</div>
			</div>

			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-3">
				Services
			</p>
			<div class="slot rounded-sm overflow-hidden">
				<table class="w-full font-mono text-xs">
					<thead>
						<tr class="bg-[#E6E6E2]">
							<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70">Service</th>
							<th class="py-2 px-3 text-center text-[10px] font-bold uppercase tracking-wider text-matte/70">Status</th>
							<th class="py-2 px-3 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">Uptime</th>
						</tr>
					</thead>
					<tbody>
						{#each [
							{ name: 'API Gateway', status: 'healthy', uptime: '99.98%' },
							{ name: 'Database Cluster', status: 'healthy', uptime: '99.99%' },
							{ name: 'Cache Layer', status: 'warning', uptime: '98.45%' },
							{ name: 'Queue Workers', status: 'healthy', uptime: '99.87%' },
							{ name: 'CDN Edge', status: 'healthy', uptime: '100.00%' },
						] as service}
							<tr class="border-t border-stone-200 hover:bg-stone-100/50 transition-colors">
								<td class="py-2 px-3 font-medium text-matte">{service.name}</td>
								<td class="py-2 px-3 text-center">
									<span class={`inline-flex w-2 h-2 rounded-full ${service.status === 'healthy' ? 'bg-led-on' : 'bg-yellow-500'}`}></span>
								</td>
								<td class="py-2 px-3 text-right tabular-nums text-matte/70">{service.uptime}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</main>

	<div class="absolute h-screen right-0">
		<PartsList {parts} showroomNumber="04" showroomName="DevOps" class="h-full overflow-y-auto" />
	</div>
</section>
