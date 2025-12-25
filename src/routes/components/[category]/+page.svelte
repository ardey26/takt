<script lang="ts">
	/**
	 * Component Category Page
	 * Lists all components within a category with SEO-optimized content.
	 */
	import Breadcrumbs from '$lib/components/seo/Breadcrumbs.svelte';
	import { generateCategoryMeta } from '$lib/utils/generateMeta';
	
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
	<!-- Header -->
	<header class="border-b border-stone-300 bg-[#F5F5F0]/95 backdrop-blur-sm">
		<div class="max-w-6xl mx-auto px-6 py-8">
			<Breadcrumbs items={breadcrumbs} class="mb-4" />
			
			<h1 class="text-2xl font-bold text-matte tracking-tight mb-2">
				{data.categoryInfo.label} Components
			</h1>
			<p class="font-mono text-sm text-matte/60 max-w-2xl">
				{data.categoryInfo.description}
			</p>
		</div>
	</header>
	
	<!-- Component Grid -->
	<main class="max-w-6xl mx-auto px-6 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each data.components as component}
				<a 
					href="/components/{data.category}/{component.slug}"
					class="group slot p-5 rounded-sm hover:ring-2 hover:ring-signal transition-all flex flex-col"
				>
					<h2 class="text-base font-bold text-matte group-hover:text-signal transition-colors mb-2">
						{component.name}
					</h2>
					<p class="font-mono text-xs text-matte/60 leading-relaxed flex-1 line-clamp-3">
						{component.useCase.split('.')[0]}.
					</p>
					
					<!-- Props count -->
					<div class="mt-4 flex items-center justify-between">
						<span class="font-mono text-[10px] text-matte/40">
							{component.props.length} props
						</span>
						<span class="font-mono text-[10px] text-signal uppercase tracking-wider group-hover:translate-x-1 transition-transform">
							View Docs →
						</span>
					</div>
				</a>
			{/each}
		</div>
		
		<!-- Back to Hub -->
		<div class="mt-12 text-center">
			<a 
				href="/components"
				class="inline-flex items-center gap-2 font-mono text-sm text-matte/60 hover:text-signal transition-colors"
			>
				← All Components
			</a>
		</div>
	</main>
</div>
