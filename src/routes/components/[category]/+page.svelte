<script lang="ts">
	/**
	 * Component Category Page
	 * Lists all components within a category with SEO-optimized content.
	 */
	import Breadcrumbs from '$lib/components/seo/Breadcrumbs.svelte';
	import { generateCategoryMeta } from '$lib/utils/generateMeta';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import Link from '$lib/components/Link.svelte';
	
	let { data } = $props();
	
	const meta = generateCategoryMeta(
		data.category,
		data.categoryInfo.label,
		data.categoryInfo.description
	);
	
	const breadcrumbs = [
		{ name: 'Home', href: '/' },
		{ name: 'Components', href: '/components' },
		{ name: data.categoryInfo.label, href: `/components/${data.category}` }
	];
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	<meta property="og:title" content={meta.ogTitle} />
	<meta property="og:description" content={meta.ogDescription} />
	<link rel="canonical" href={meta.canonical} />
</svelte:head>

<div class="min-h-screen bg-bone">
	<header class="border-b border-stone-300 bg-[#F5F5F0]/95 backdrop-blur-sm">
		<div class="max-w-6xl mx-auto px-6 py-8">
			<Breadcrumbs items={breadcrumbs} class="mb-4" />
			
			<Heading level={1} class="text-2xl mb-2">
				{data.categoryInfo.label} Components
			</Heading>
			<Text variant="muted" class="max-w-2xl">
				{data.categoryInfo.description}
			</Text>
		</div>
	</header>
	
	<main class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.components as component}
				<a 
					href="/components/{data.category}/{component.slug}"
					class="group slot p-5 rounded-sm hover:ring-2 hover:ring-signal transition-all flex flex-col"
				>
					<Heading level={2} class="text-base group-hover:text-signal transition-colors mb-2">
						{component.name}
					</Heading>
					<Text variant="muted" class="text-xs leading-relaxed flex-1 line-clamp-3">
						{component.useCase.split('.')[0]}.
					</Text>
					
					<div class="mt-4 flex items-center justify-between">
						<Text variant="precise" as="span" class="text-[10px] text-matte/40">
							{component.props.length} props
						</Text>
						<Text variant="signal" as="span" class="text-[10px] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
							View Docs →
						</Text>
					</div>
				</a>
			{/each}
		</div>
		
		<div class="mt-12 text-center">
			<Link href="/components" class="text-sm text-matte/60 hover:text-signal no-underline">
				← All Components
			</Link>
		</div>
	</main>
</div>
