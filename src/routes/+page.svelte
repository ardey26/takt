<script lang="ts">
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateSoftwareSchema } from '$lib/utils/generateMeta';
	import Button from '$lib/components/Button.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Tag from '$lib/components/Tag.svelte';
	
	const softwareSchema = generateSoftwareSchema();
	
	// Demo states
	let toggleChecked = $state(true);
</script>

<svelte:head>
	<title>Takt – Svelte 5 Industrial UI Components</title>
	<meta name="description" content="High-performance Svelte 5 component library with Dieter Rams-inspired industrial design. Built for Fintech, Logistics, and DevOps dashboards. Open source." />
	<meta name="keywords" content="Svelte UI library, Svelte 5 runes, industrial UI design, dashboard components, Dieter Rams, Braun aesthetic, Tailwind CSS, open source" />
	<meta property="og:title" content="Takt – Svelte 5 Industrial UI Components" />
	<meta property="og:description" content="High-performance component library with Dieter Rams-inspired design for enterprise dashboards." />
	<link rel="canonical" href="https://takt.ui" />
</svelte:head>

<SchemaOrg schema={softwareSchema} />

<div class="min-h-screen bg-bone">
	<!-- Hero -->
	<header class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-16 md:py-24">
			<div class="flex items-center gap-3 mb-6">
				<span class="font-mono text-[10px] text-matte/40 uppercase tracking-[0.3em]">Svelte 5</span>
				<span class="w-1 h-1 rounded-full bg-signal"></span>
				<span class="font-mono text-[10px] text-matte/40 uppercase tracking-[0.3em]">Tailwind CSS</span>
				<span class="w-1 h-1 rounded-full bg-signal"></span>
				<span class="font-mono text-[10px] text-matte/40 uppercase tracking-[0.3em]">Open Source</span>
			</div>
			
			<h1 class="text-4xl md:text-5xl font-bold text-matte tracking-tight mb-4">
				Takt
			</h1>
			<p class="text-lg md:text-xl text-matte/60 max-w-2xl mb-8 leading-relaxed">
				Industrial UI components inspired by <strong class="text-matte">Dieter Rams</strong>. 
				Built for high-density dashboards in <span class="text-signal">Fintech</span>, 
				<span class="text-signal">Logistics</span>, and <span class="text-signal">DevOps</span>.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4">
				<a 
					href="/showroom"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-signal text-white font-mono text-sm font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all"
					style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 40%, rgba(0,0,0,0.15))"
				>
					Open Showroom
				</a>
				<a 
					href="/components"
					class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-200 text-matte font-mono text-sm font-bold uppercase tracking-wider rounded-full hover:bg-stone-300 transition-all"
				>
					Browse Docs
				</a>
			</div>
		</div>
	</header>
	
	<!-- Component Preview -->
	<section class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-16">
			<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-8">
				Component Preview
			</h2>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="slot p-4 rounded-sm flex flex-col items-center gap-3">
					<span class="text-[10px] font-mono text-matte/40 uppercase">Button</span>
					<Button label="Action" />
				</div>
				
				<div class="slot p-4 rounded-sm flex flex-col items-center gap-3">
					<span class="text-[10px] font-mono text-matte/40 uppercase">Meter</span>
					<Meter value={72} compact />
				</div>
				
				<div class="slot p-4 rounded-sm flex flex-col items-center gap-3">
					<span class="text-[10px] font-mono text-matte/40 uppercase">Toggle</span>
					<Toggle bind:checked={toggleChecked} />
				</div>
				
				<div class="slot p-4 rounded-sm flex flex-col items-center gap-3">
					<span class="text-[10px] font-mono text-matte/40 uppercase">Tag</span>
					<Tag variant="in-stock" label="In Stock" />
				</div>
			</div>
		</div>
	</section>
	
	<!-- Features -->
	<section class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-16">
			<div class="grid md:grid-cols-3 gap-8">
				<div>
					<h3 class="font-mono text-sm font-bold text-matte mb-2">Svelte 5 Runes</h3>
					<p class="font-mono text-xs text-matte/60 leading-relaxed">
						Fine-grained reactivity with $state, $derived, and $effect.
					</p>
				</div>
				
				<div>
					<h3 class="font-mono text-sm font-bold text-matte mb-2">Industrial Design</h3>
					<p class="font-mono text-xs text-matte/60 leading-relaxed">
						Dieter Rams and Braun-inspired aesthetics.
					</p>
				</div>
				
				<div>
					<h3 class="font-mono text-sm font-bold text-matte mb-2">Accessible</h3>
					<p class="font-mono text-xs text-matte/60 leading-relaxed">
						ARIA roles, keyboard navigation, and WCAG AA contrast.
					</p>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Use Cases -->
	<section class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-16">
			<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-8">
				Built For
			</h2>
			
			<div class="grid md:grid-cols-3 gap-6">
				<a href="/showroom?mode=ledger" class="group slot p-6 rounded-sm hover:ring-2 hover:ring-signal transition-all">
					<h3 class="font-mono text-base font-bold text-matte group-hover:text-signal mb-2">Fintech</h3>
					<p class="font-mono text-xs text-matte/60">
						Real-time tickers, portfolio grids, and financial charts.
					</p>
				</a>
				
				<a href="/showroom?mode=logistics" class="group slot p-6 rounded-sm hover:ring-2 hover:ring-signal transition-all">
					<h3 class="font-mono text-base font-bold text-matte group-hover:text-signal mb-2">Logistics</h3>
					<p class="font-mono text-xs text-matte/60">
						Inventory tables, stock meters, and warehouse controls.
					</p>
				</a>
				
				<a href="/showroom?mode=devops" class="group slot p-6 rounded-sm hover:ring-2 hover:ring-signal transition-all">
					<h3 class="font-mono text-base font-bold text-matte group-hover:text-signal mb-2">DevOps</h3>
					<p class="font-mono text-xs text-matte/60">
						System dashboards, deployment panels, and metric displays.
					</p>
				</a>
			</div>
		</div>
	</section>
	
	<!-- Footer -->
	<footer class="bg-[#E6E6E2]">
		<div class="max-w-5xl mx-auto px-6 py-8">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4">
				<div class="font-mono text-xs text-matte/50">
					© 2024 Takt UI · MIT License
				</div>
				<div class="flex items-center gap-6">
					<a href="/components" class="font-mono text-xs text-matte/50 hover:text-signal transition-colors">
						Components
					</a>
					<a href="/showroom" class="font-mono text-xs text-matte/50 hover:text-signal transition-colors">
						Showroom
					</a>
					<a href="https://github.com/takt/takt" class="font-mono text-xs text-matte/50 hover:text-signal transition-colors">
						GitHub
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
