<script lang="ts">
	import Meter from '$lib/components/Meter.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Button from '$lib/components/Button.svelte';

	let coolingEnabled = $state(false);
	let powerEnabled = $state(true);
	let lockEnabled = $state(false);

	let cpuValue = $state(67);
	let ramValue = $state(45);
	let heatValue = $derived(coolingEnabled ? 22 : 71);

	let logs = $state([
		'[00:00:01] Initializing kernel...',
		'[00:00:02] Loading system modules',
		'[00:00:03] Buffer allocation: 2048MB',
		'[00:00:04] Network stack ready',
		'[00:00:05] Thermal sensors online',
		'[00:00:06] System ready',
	]);

	let deployed = $state(false);

	function handleDeploy() {
		deployed = true;
		logs = [...logs, `[${new Date().toLocaleTimeString()}] DEPLOY initiated`];
		logs = [...logs, `[${new Date().toLocaleTimeString()}] Building artifacts...`];
		setTimeout(() => {
			logs = [...logs, `[${new Date().toLocaleTimeString()}] Deploy successful`];
		}, 1500);
	}

	$effect(() => {
		const interval = setInterval(() => {
			cpuValue = Math.max(20, Math.min(95, cpuValue + (Math.random() - 0.5) * 10));
			ramValue = Math.max(30, Math.min(80, ramValue + (Math.random() - 0.5) * 5));
		}, 2000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>MAINFRAME CONTROL 01 | System Monitor</title>
	<meta name="description" content="Industrial-grade system monitor dashboard. A Dieter Rams-inspired component library for Svelte." />
</svelte:head>

<main class="min-h-screen chassis p-6 md:p-10">
	<div class="max-w-4xl mx-auto">
		<header class="flex items-center justify-between mb-8">
			<div>
				<h1 class="font-mono text-lg font-semibold tracking-tight text-matte">MAINFRAME CONTROL 01</h1>
				<p class="font-mono text-[10px] tracking-[0.2em] text-matte/50 uppercase mt-0.5">System Monitor Dashboard</p>
			</div>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<section class="p-5 border border-stone-300 rounded-sm bg-bone/50">
				<h2 class="font-mono text-[10px] font-medium tracking-[0.3em] text-matte/40 uppercase mb-4">VITALS</h2>
				<div class="flex flex-col gap-4">
					<Meter label="CPU" value={cpuValue} />
					<Meter label="RAM" value={ramValue} />
					<Meter label="HEAT" value={heatValue} variant="heat" />
				</div>
			</section>

			<section class="p-5 border border-stone-300 rounded-sm bg-bone/50">
				<h2 class="font-mono text-[10px] font-medium tracking-[0.3em] text-matte/40 uppercase mb-4">OVERRIDE</h2>
				<div class="flex flex-col gap-3">
					<Toggle label="COOLING" bind:checked={coolingEnabled} />
					<Toggle label="POWER" bind:checked={powerEnabled} />
					<Toggle label="LOCK" bind:checked={lockEnabled} />
				</div>
			</section>

			<section class="p-5 border border-stone-300 rounded-sm bg-bone/50">
				<h2 class="font-mono text-[10px] font-medium tracking-[0.3em] text-matte/40 uppercase mb-4">LOG</h2>
				<Panel label="SYSTEM OUTPUT">
					{#each logs as log}
						<div class="text-[11px] leading-5">{log}</div>
					{/each}
				</Panel>
			</section>

			<section class="p-5 border border-stone-300 rounded-sm bg-bone/50 flex flex-col items-center justify-center">
				<h2 class="font-mono text-[10px] font-medium tracking-[0.3em] text-matte/40 uppercase mb-6">TRIGGER</h2>
				<Button label="DEPLOY" onclick={handleDeploy} />
				{#if deployed}
					<p class="font-mono text-[10px] text-signal mt-4 tracking-wider">DEPLOYMENT ACTIVE</p>
				{/if}
			</section>
		</div>

		<footer class="mt-10 pt-6 border-t border-stone-200">
			<p class="font-mono text-[9px] tracking-[0.15em] text-matte/30 uppercase text-center">
				Andeus UI · Industrial Component Library · Less but better
			</p>
		</footer>
	</div>
</main>
