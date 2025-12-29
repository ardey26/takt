<script lang="ts">
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateHubMeta, generateSoftwareSchema } from '$lib/utils/generateMeta';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import Link from '$lib/components/Link.svelte';
	
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
			<nav class="font-mono text-xs text-matte/60 mb-4 flex gap-4 items-center">
				<Link href="/" class="hover:text-matte no-underline text-matte/60">Home</Link>
				<Text variant="precise" as="span" class="text-matte">Components</Text>
			</nav>
			
			<Heading level={1} class="text-2xl mb-2">
				Svelte 5 Industrial UI Components
			</Heading>
			<Text variant="muted" class="max-w-2xl">
				High-performance component library with Dieter Rams-inspired design. 
				Built for Fintech, Logistics, and DevOps dashboards.
				<Text variant="signal" as="span">{data.totalComponents} components</Text> ready to use.
			</Text>
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
						<Heading level={2} class="text-lg group-hover:text-signal transition-colors">
							{category.label}
						</Heading>
						<Text variant="precise" as="span" class="text-xs text-matte/40 bg-stone-200 px-2 py-0.5 rounded">
							{category.componentCount}
						</Text>
					</div>
					<Text variant="muted" class="text-xs leading-relaxed">
						{category.description}
					</Text>
					<Text variant="signal" as="div" class="mt-4 text-[10px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
						View Components →
					</Text>
				</a>
			{/each}
		</div>
		
		<section class="mt-16 text-center">
			<Heading level={2} class="text-lg mb-2">See Components in Action</Heading>
			<Text variant="muted" class="mb-6">
				Explore the interactive Showroom to see all components working together.
			</Text>
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
