<script lang="ts">
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateHubMeta, generateSoftwareSchema } from '$lib/utils/generateMeta';
	
	let { data } = $props();
	
	const meta = generateHubMeta();
	const softwareSchema = generateSoftwareSchema();
	
	const itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		'name': 'Takt UI Component Categories',
		'itemListElement': data.categories.map((cat, index) => ({
			'@type': 'ListItem',
			'position': index + 1,
			'name': cat.label,
			'url': `https://takt-ui.app/components/${cat.slug}`
		}))
	};
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	<meta property="og:title" content={meta.ogTitle} />
	<meta property="og:description" content={meta.ogDescription} />
	<link rel="canonical" href={meta.canonical} />
</svelte:head>

<SchemaOrg schema={[softwareSchema, itemListSchema]} />

<div class="min-h-screen bg-bone">
	<header class="border-b border-stone-300 bg-[#F5F5F0]/95 backdrop-blur-sm">
		<div class="max-w-6xl mx-auto px-6 py-8">
			<nav class="font-mono text-xs text-matte/60 mb-4">
				<a href="/" class="hover:text-matte transition-colors">Home</a>
				<span class="mx-2">›</span>
				<span class="text-matte">Components</span>
			</nav>
			
			<h1 class="text-2xl font-bold text-matte tracking-tight mb-2">
				Svelte 5 Industrial UI Components
			</h1>
			<p class="font-mono text-sm text-matte/60 max-w-2xl">
				High-performance component library with Dieter Rams-inspired design. 
				Built for Fintech, Logistics, and DevOps dashboards.
				<span class="text-signal font-medium">{data.totalComponents} components</span> ready to use.
			</p>
		</div>
	</header>
	
	<main class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each data.categories as category}
				<a 
					href="/components/{category.slug}"
					class="group slot p-6 rounded-sm hover:ring-2 hover:ring-signal transition-all"
				>
					<div class="flex items-start justify-between mb-3">
						<h2 class="text-lg font-bold text-matte group-hover:text-signal transition-colors">
							{category.label}
						</h2>
						<span class="font-mono text-xs text-matte/40 bg-stone-200 px-2 py-0.5 rounded">
							{category.componentCount}
						</span>
					</div>
					<p class="font-mono text-xs text-matte/60 leading-relaxed">
						{category.description}
					</p>
					<div class="mt-4 font-mono text-[10px] text-signal uppercase tracking-wider group-hover:translate-x-1 transition-transform">
						View Components →
					</div>
				</a>
			{/each}
		</div>
		
		<section class="mt-16 text-center">
			<h2 class="text-lg font-bold text-matte mb-2">See Components in Action</h2>
			<p class="font-mono text-sm text-matte/60 mb-6">
				Explore the interactive Showroom to see all components working together.
			</p>
			<a 
				href="/showroom"
				class="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-mono text-sm font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all"
				style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 40%, rgba(0,0,0,0.15))"
			>
				Open Showroom
			</a>
		</section>
	</main>
</div>
