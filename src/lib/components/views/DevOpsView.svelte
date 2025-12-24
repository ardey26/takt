<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Divider from '$lib/components/Divider.svelte';

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
		}, 1000);
		return () => clearInterval(interval);
	});
</script>

<section class="min-h-[60vh] chassis flex flex-col items-center justify-center px-4 py-12">
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

<section class="chassis px-4 sm:px-6 py-8">
	<div class="max-w-2xl mx-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
	</div>
</section>

<Divider text="// Services" />

<section class="chassis px-4 sm:px-6 py-8">
	<div class="max-w-2xl mx-auto">
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
</section>

<div class="chassis py-8 text-center">
	<p class="font-mono text-[9px] tracking-[0.1em] text-matte/30 uppercase">
		Takt · Showroom 04
	</p>
</div>
