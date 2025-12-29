<script lang="ts">
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateSoftwareSchema } from '$lib/utils/generateMeta';
	import { componentRegistry, categories } from '$lib/data/componentRegistry';
	
	import Button from '$lib/components/Button.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Divider from '$lib/components/Divider.svelte';
	
	const softwareSchema = generateSoftwareSchema();
	
	let toggleChecked = $state(true);
	let currentPage = $state(3);
	let inputValue = $state('');
	let selectValue = $state('all');
	let tickerValue = $state(2847.50);

	const componentPreviews: Record<string, { render: boolean }> = {
		'button': { render: true },
		'meter': { render: true },
		'toggle': { render: true },
		'tag': { render: true },
		'ticker': { render: true },
		'panel': { render: true },
		'input': { render: true },
		'select': { render: true },
		'pagination': { render: true },
		'divider': { render: true },
		'datatable': { render: false },
		'toolbar': { render: false },
		'avatar': { render: false },
	};
</script>

<svelte:head>
	<title>Takt – Svelte 5 Component Library</title>
	<meta name="description" content="Industrial UI components for Svelte 5. Dieter Rams-inspired design. Less, but better." />
	<meta name="keywords" content="Svelte UI library, Svelte 5 runes, industrial design, Dieter Rams, component library" />
	<meta property="og:title" content="Takt – Svelte 5 Component Library" />
	<meta property="og:description" content="Industrial UI components. Less, but better." />
	<link rel="canonical" href="https://takt.ui" />
</svelte:head>

<SchemaOrg schema={softwareSchema} />

<div class="min-h-screen bg-bone">
	<header class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-12 md:py-16">
			<div class="flex items-center gap-2 mb-4">
				<span class="font-mono text-[10px] text-matte/40 uppercase tracking-[0.2em]">Svelte 5</span>
				<span class="w-1 h-1 rounded-full bg-matte/20"></span>
				<span class="font-mono text-[10px] text-matte/40 uppercase tracking-[0.2em]">Open Source</span>
			</div>
			
			<h1 class="text-3xl md:text-4xl font-bold text-matte tracking-tight mb-3">
				Takt
			</h1>
			<p class="font-mono text-sm text-matte/60 max-w-lg mb-6">
				Industrial UI components inspired by Dieter Rams.<br/>
				Less, but better.
			</p>
			
			<div class="flex gap-3">
				<a 
					href="/components"
					class="px-5 py-2.5 bg-matte text-bone font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-matte/90 transition-colors"
				>
					Browse Docs
				</a>
				<a 
					href="/showroom"
					class="px-5 py-2.5 border border-stone-300 text-matte font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover:border-matte transition-colors"
				>
					View Showrooms
				</a>
			</div>
		</div>
	</header>

	<main class="max-w-5xl mx-auto px-6 py-12">
		<div class="flex items-baseline justify-between mb-6">
			<h2 class="font-mono text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase">
				Component Index
			</h2>
			<span class="font-mono text-[10px] text-matte/30">
				{componentRegistry.length} components
			</span>
		</div>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-stone-300">
			{#each componentRegistry as component}
				<a 
					href="/components/{component.category}/{component.slug}"
					class="bg-bone p-4 hover:bg-stone-100 transition-colors group flex flex-col"
				>
					<div class="flex-1 flex items-center justify-center min-h-16 mb-3">
						{#if component.slug === 'button'}
							<Button label="OK" class="scale-90 pointer-events-none" />
						{:else if component.slug === 'meter'}
							<Meter value={65} compact />
						{:else if component.slug === 'toggle'}
							<Toggle checked={toggleChecked} class="pointer-events-none" />
						{:else if component.slug === 'tag'}
							<Tag variant="in-stock" label="Ready" />
						{:else if component.slug === 'ticker'}
							<div class="text-center">
								<span class="font-mono text-lg font-bold text-matte tabular-nums">$2,847</span>
								<span class="font-mono text-[10px] text-matte/40 block">+2.3%</span>
							</div>
						{:else if component.slug === 'panel'}
							<div class="slot px-3 py-2 rounded-sm">
								<span class="font-mono text-[10px] text-matte/50">Panel</span>
							</div>
						{:else if component.slug === 'input'}
							<div class="w-full max-w-24">
								<Input placeholder="..." class="pointer-events-none [&>input]:h-7 [&>input]:text-[10px]" />
							</div>
						{:else if component.slug === 'select'}
							<div class="slot px-3 py-1.5 rounded-sm flex items-center gap-1">
								<span class="font-mono text-[10px] text-matte/60">All</span>
								<svg class="w-2.5 h-2.5 text-matte/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						{:else if component.slug === 'pagination'}
							<div class="flex gap-1">
								<span class="font-mono text-[10px] text-matte/30">‹</span>
								<span class="font-mono text-[10px] text-matte/60">1</span>
								<span class="font-mono text-[10px] text-signal font-bold">2</span>
								<span class="font-mono text-[10px] text-matte/60">3</span>
								<span class="font-mono text-[10px] text-matte/30">›</span>
							</div>
						{:else if component.slug === 'divider'}
							<div class="w-full border-t border-stone-300"></div>
						{:else if component.slug === 'datatable'}
							<div class="grid grid-cols-3 gap-px bg-stone-300 w-full">
								<div class="bg-bone h-3"></div>
								<div class="bg-bone h-3"></div>
								<div class="bg-bone h-3"></div>
								<div class="bg-bone h-3"></div>
								<div class="bg-bone h-3"></div>
								<div class="bg-bone h-3"></div>
							</div>
						{:else if component.slug === 'toolbar'}
							<div class="flex gap-px w-full">
								<div class="flex-1 bg-stone-200 h-5 rounded-l-sm"></div>
								<div class="w-8 bg-signal h-5 rounded-r-sm"></div>
							</div>
						{:else if component.slug === 'avatar'}
							<div class="w-8 h-8 rounded-full bg-stone-300 flex items-center justify-center">
								<span class="font-mono text-[10px] text-matte/50">AB</span>
							</div>
						{:else}
							<span class="font-mono text-[10px] text-matte/30">{component.name}</span>
						{/if}
					</div>
					
					<span class="font-mono text-xs text-matte group-hover:text-signal transition-colors">
						{component.name}
					</span>
					<span class="font-mono text-[9px] text-matte/40 capitalize">
						{component.category.replace('-', ' ')}
					</span>
				</a>
			{/each}
		</div>
	</main>

	<footer class="border-t border-stone-300 bg-[#EAEAE6]">
		<div class="max-w-5xl mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<span class="font-mono text-[10px] text-matte/40">
					Takt · MIT License
				</span>
				<div class="flex gap-4">
					<a href="/components" class="font-mono text-[10px] text-matte/40 hover:text-matte transition-colors">Docs</a>
					<a href="/showroom" class="font-mono text-[10px] text-matte/40 hover:text-matte transition-colors">Showroom</a>
					<a href="https://github.com/ardey26/takt" class="font-mono text-[10px] text-matte/40 hover:text-matte transition-colors">GitHub</a>
				</div>
			</div>
		</div>
	</footer>
</div>
