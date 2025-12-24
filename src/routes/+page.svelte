<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	import ModeSelector from '$lib/components/ModeSelector.svelte';
	import LogisticsView from '$lib/components/views/LogisticsView.svelte';
	import LedgerView from '$lib/components/views/LedgerView.svelte';
	import SettingsView from '$lib/components/views/SettingsView.svelte';
	import DevOpsView from '$lib/components/views/DevOpsView.svelte';

	// Get mode from URL query param, default to 'logistics'
	let currentMode = $derived($page.url.searchParams.get('mode') || 'logistics');

	const modeLabels: Record<string, string> = {
		'logistics': 'Logistics',
		'ledger': 'Ledger',
		'settings': 'Switchboard',
		'devops': 'DevOps'
	};

	function handleModeChange(mode: string) {
		const url = new URL(window.location.href);
		url.searchParams.set('mode', mode);
		goto(url.pathname + url.search, { replaceState: true });
	}
</script>

<svelte:head>
	<title>Takt · Showroom{currentMode ? `: ${modeLabels[currentMode] || currentMode}` : ''}</title>
	<meta name="description" content="High-end Svelte component library inspired by Dieter Rams. Explore component showrooms." />
</svelte:head>

<header class="sticky top-0 z-50 chassis border-b border-stone-300 bg-[#F5F5F0]/95 backdrop-blur-sm">
	<div class="flex items-center justify-between px-4 sm:px-6 py-3">
		<div class="flex items-center gap-4">
			<h1 class="font-mono text-sm font-bold tracking-tight text-matte">
				Takt
			</h1>
			<span class="hidden sm:inline font-mono text-[9px] text-matte/40 uppercase tracking-wider">
				Component Showroom
			</span>
		</div>
		
		<ModeSelector 
			value={currentMode}
			onchange={handleModeChange}
		/>
	</div>
</header>

{#if currentMode === 'logistics'}
	<LogisticsView />
{:else if currentMode === 'ledger'}
	<LedgerView />
{:else if currentMode === 'settings'}
	<SettingsView />
{:else if currentMode === 'devops'}
	<DevOpsView />
{:else}
	<LogisticsView />
{/if}
