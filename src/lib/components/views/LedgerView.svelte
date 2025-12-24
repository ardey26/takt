<script lang="ts">
	import Ticker from '$lib/components/Ticker.svelte';
	import Plot from '$lib/components/Plot.svelte';
	import PeriodSelector from '$lib/components/PeriodSelector.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Divider from '$lib/components/Divider.svelte';

	let selectedPeriod = $state('1D');

	const metrics = [
		{ label: 'Portfolio Value', value: 847293.42, change: 2.34, prefix: '$' },
		{ label: 'Daily P&L', value: 12847.89, change: 1.54, prefix: '$' },
		{ label: 'Unrealized Gains', value: -3291.50, change: -0.39, prefix: '$' },
		{ label: 'Cash Balance', value: 125000.00, change: 0, prefix: '$' },
	];

	const chartData = [
		{ label: 'Mon', value: 2.1 },
		{ label: 'Tue', value: -1.3 },
		{ label: 'Wed', value: 3.2 },
		{ label: 'Thu', value: 0.8 },
		{ label: 'Fri', value: -0.4 },
		{ label: 'Sat', value: 1.9 },
		{ label: 'Sun', value: 2.4 },
	];

	const volumeData = [
		{ value: 45 },
		{ value: 72 },
		{ value: 38 },
		{ value: 91 },
		{ value: 56 },
		{ value: 83 },
		{ value: 67 },
		{ value: 29 },
		{ value: 88 },
		{ value: 44 },
	];
</script>

<section class="min-h-[60vh] chassis flex flex-col items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 02
			</p>
			<h1 class="font-mono text-2xl font-bold tracking-tight text-matte mb-2">
				The Ledger
			</h1>
			<p class="font-mono text-xs text-matte/50">
				High-precision financial analytics
			</p>
		</div>
	</Panel>

	<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl">
		{#each metrics as metric}
			<Ticker 
				value={metric.value}
				label={metric.label}
				change={metric.change}
				prefix={metric.prefix}
			/>
		{/each}
	</div>
</section>

<Divider text="// Performance" />

<section class="chassis px-4 sm:px-6 py-8">
	<div class="max-w-4xl mx-auto">
		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
			<div>
				<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
					Returns
				</p>
				<h2 class="font-mono text-lg font-bold tracking-tight text-matte">
					Daily Performance
				</h2>
			</div>
			<PeriodSelector bind:value={selectedPeriod} />
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div>
				<p class="font-mono text-[9px] text-matte/40 uppercase tracking-wider mb-2">
					% Change
				</p>
				<Plot data={chartData} type="bar" height={160} />
			</div>
			<div>
				<p class="font-mono text-[9px] text-matte/40 uppercase tracking-wider mb-2">
					Volume
				</p>
				<Plot data={volumeData} type="step" height={160} />
			</div>
		</div>
	</div>
</section>

<Divider text="// Positions" />

<section class="chassis px-4 sm:px-6 py-8">
	<div class="max-w-4xl mx-auto">
		<div class="slot rounded-sm overflow-hidden">
			<table class="w-full font-mono text-xs">
				<thead>
					<tr class="bg-[#E6E6E2]">
						<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70">Symbol</th>
						<th class="py-2 px-3 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">Qty</th>
						<th class="py-2 px-3 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">Avg Cost</th>
						<th class="py-2 px-3 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">Current</th>
						<th class="py-2 px-3 text-right text-[10px] font-bold uppercase tracking-wider text-matte/70">P&L</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ symbol: 'AAPL', qty: 150, avgCost: 142.50, current: 178.23, pnl: 5359.50 },
						{ symbol: 'MSFT', qty: 80, avgCost: 285.00, current: 374.58, pnl: 7166.40 },
						{ symbol: 'GOOGL', qty: 25, avgCost: 138.90, current: 141.80, pnl: 72.50 },
						{ symbol: 'NVDA', qty: 40, avgCost: 495.20, current: 481.67, pnl: -541.20 },
						{ symbol: 'TSLA', qty: 60, avgCost: 248.30, current: 252.08, pnl: 226.80 },
					] as position}
						<tr class="border-t border-stone-200 hover:bg-stone-100/50 transition-colors">
							<td class="py-2 px-3 font-bold text-matte">{position.symbol}</td>
							<td class="py-2 px-3 text-right tabular-nums text-matte/70">{position.qty}</td>
							<td class="py-2 px-3 text-right tabular-nums text-matte/70">${position.avgCost.toFixed(2)}</td>
							<td class="py-2 px-3 text-right tabular-nums text-matte">${position.current.toFixed(2)}</td>
							<td class={`py-2 px-3 text-right tabular-nums font-medium ${position.pnl < 0 ? 'text-red-600' : 'text-matte/70'}`}>
								{position.pnl < 0 ? '-' : '+'}${Math.abs(position.pnl).toFixed(2)}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<div class="chassis py-8 text-center">
	<p class="font-mono text-[9px] tracking-[0.1em] text-matte/30 uppercase">
		Takt · Showroom 02
	</p>
</div>
