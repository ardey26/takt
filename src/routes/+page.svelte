<script lang="ts">
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateSoftwareSchema } from '$lib/utils/generateMeta';
	import { componentRegistry } from '$lib/data/componentRegistry';
	import ComponentPreview from '$lib/components/ComponentPreview.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';	
	import Link from '$lib/components/Link.svelte';
	
	const softwareSchema = generateSoftwareSchema();
</script>

<svelte:head>
	<title>Takt – Svelte 5 Component Library</title>
	<meta name="description" content="Industrial UI components for Svelte 5. Dieter Rams-inspired design. Less, but better." />
	<meta name="keywords" content="Svelte UI library, Svelte 5 runes, industrial design, Dieter Rams, component library" />
	<meta property="og:title" content="Takt – Svelte 5 Component Library" />
	<meta property="og:description" content="Industrial UI components. Less, but better." />
	<link rel="canonical" href="https://takt-ui.app" />
</svelte:head>

<SchemaOrg schema={softwareSchema} />

<div class="min-h-screen bg-bone">
	<header class="border-b border-stone-300">
		<div class="max-w-5xl mx-auto px-6 py-12 md:py-16">
			<div class="flex items-center gap-2 mb-4">
				<Text variant="precise" as="span" class="text-[10px] text-matte/40 uppercase tracking-[0.2em]">Svelte 5</Text>
				<span class="w-1 h-1 rounded-full bg-matte/20"></span>
				<Text variant="precise" as="span" class="text-[10px] text-matte/40 uppercase tracking-[0.2em]">Open Source</Text>
			</div>
			
			<Heading level={1} class="text-3xl md:text-4xl mb-3">
				Takt
			</Heading>
			<Text variant="muted" class="max-w-lg mb-6">
				Industrial UI components inspired by Dieter Rams.<br/>
				Less, but better.
			</Text>
			
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
			<Text variant="precise" as="span" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase">
				Component Index
			</Text>
			<Text variant="precise" as="span" class="text-[10px] text-matte/30">
				{componentRegistry.length} components
			</Text>
		</div>

		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-stone-300">
			{#each componentRegistry as component}
				<a 
					href="/components/{component.category}/{component.slug}"
					class="bg-bone p-4 hover:bg-stone-100 transition-colors group flex flex-col"
				>
					<ComponentPreview slug={component.slug} name={component.name} class="flex-1 mb-3" />
					
					<Text variant="precise" as="span" class="text-xs text-matte group-hover:text-signal transition-colors">
						{component.name}
					</Text>
					<Text variant="precise" as="span" class="text-[9px] text-matte/40 capitalize">
						{component.category.replace('-', ' ')}
					</Text>
				</a>
			{/each}
		</div>
	</main>

	<footer class="border-t border-stone-300 bg-[#EAEAE6]">
		<div class="max-w-5xl mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<Text variant="precise" as="span" class="text-[10px] text-matte/40">
					Takt · MIT License
				</Text>
				<div class="flex gap-4">
					<Link href="/components" class="text-[10px] text-matte/40 hover:text-matte no-underline">Docs</Link>
					<Link href="/showroom" class="text-[10px] text-matte/40 hover:text-matte no-underline">Showroom</Link>
					<Link href="https://github.com/ardey26/takt" class="text-[10px] text-matte/40 hover:text-matte no-underline">GitHub</Link>
				</div>
			</div>
		</div>
	</footer>
</div>
