<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	
	import ModeSelector from '$lib/components/ModeSelector.svelte';
	import LogisticsView from '$lib/components/views/LogisticsView.svelte';
	import LedgerView from '$lib/components/views/LedgerView.svelte';
	import FormsView from '$lib/components/views/FormsView.svelte';
	import DevOpsView from '$lib/components/views/DevOpsView.svelte';

	let currentMode = $derived($page.url.searchParams.get('mode') || 'logistics');

	const modeLabels: Record<string, string> = {
		'logistics': 'Logistics',
		'ledger': 'Ledger',
		'forms': 'Forms',
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
			<a href="/" class="font-mono text-sm font-bold tracking-tight text-matte hover:text-signal transition-colors">
				Takt
			</a>
			<a 
				href="/components" 
				class="font-mono text-[10px] text-matte/50 uppercase tracking-wider hover:text-signal transition-all"
			>
				Docs
			</a>
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
{:else if currentMode === 'forms'}
	<FormsView />
{:else if currentMode === 'devops'}
	<DevOpsView />
{:else}
	<LogisticsView />
{/if}
