<script lang="ts">
	import { cn } from '$lib/utils';
	import ModeSelector, { type Mode } from './ModeSelector.svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { Snippet } from 'svelte';

	export interface ShowcaseLayoutProps {
		logistics?: Snippet;
		settings?: Snippet;
		ledger?: Snippet;
		devops?: Snippet;
		class?: string;
	}

	let { 
		logistics, 
		settings, 
		ledger, 
		devops, 
		class: className 
	}: ShowcaseLayoutProps = $props();

	function getInitialMode(): Mode {
		if (!browser) return 'logistics';
		const params = new URLSearchParams(window.location.search);
		const mode = params.get('mode') as Mode;
		return mode && ['logistics', 'settings', 'ledger', 'devops'].includes(mode) ? mode : 'logistics';
	}

	let activeMode = $state<Mode>(getInitialMode());

	function handleModeChange(mode: Mode) {
		activeMode = mode;
		if (browser) {
			const url = new URL(window.location.href);
			url.searchParams.set('mode', mode);
			goto(url.toString(), { replaceState: true, noScroll: true });
		}
	}
</script>

<svelte:head>
	<title>Takt · Showroom</title>
	<meta name="description" content="High-end Svelte component library inspired by Dieter Rams." />
</svelte:head>

<div class={cn("min-h-screen flex flex-col", className)}>
	<header class="sticky top-0 z-50 chassis border-b border-stone-300 px-4 py-3 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase">
				Takt
			</p>
			<ModeSelector value={activeMode} onchange={handleModeChange} />
		</div>
	</header>

	<main class="flex-1">
		{#if activeMode === 'logistics' && logistics}
			{@render logistics()}
		{:else if activeMode === 'settings' && settings}
			{@render settings()}
		{:else if activeMode === 'ledger' && ledger}
			{@render ledger()}
		{:else if activeMode === 'devops' && devops}
			{@render devops()}
		{/if}
	</main>
</div>
