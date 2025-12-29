<script lang="ts">
	import Breadcrumbs from '$lib/components/seo/Breadcrumbs.svelte';
	import PropsTable from '$lib/components/seo/PropsTable.svelte';
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateComponentMeta, generateComponentSchema } from '$lib/utils/generateMeta';
	import { getShowroomLink } from '$lib/data/componentRegistry';
	import ComponentPreview from '$lib/components/ComponentPreview.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';
	import Link from '$lib/components/Link.svelte';
	
	let { data } = $props();
	
	const meta = generateComponentMeta(data.component);
	const schema = generateComponentSchema(data.component);
	const showroomLink = getShowroomLink(data.component);
	
	const breadcrumbs = [
		{ name: 'Home', href: '/' },
		{ name: 'Components', href: '/components' },
		{ name: data.categoryInfo.label, href: `/components/${data.category}` },
		{ name: data.component.name, href: `/components/${data.category}/${data.component.slug}` }
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

<SchemaOrg {schema} />

<div class="min-h-screen bg-bone">
	<header class="border-b border-stone-300 bg-[#F5F5F0]/95 backdrop-blur-sm">
		<div class="max-w-4xl mx-auto px-6 py-8">
			<Breadcrumbs items={breadcrumbs} class="mb-4" />
			
			<Heading level={1} class="text-2xl mb-3">
				{data.component.title}
			</Heading>
			
			<Text variant="muted" class="max-w-2xl leading-relaxed">
				{data.component.description}
			</Text>
			
			<div class="flex flex-wrap gap-2 mt-4">
				{#each data.component.keywords.slice(0, 3) as keyword}
					<Text variant="precise" as="span" class="text-[10px] text-matte/40 bg-stone-200 px-2 py-1 rounded uppercase tracking-wide">
						{keyword}
					</Text>
				{/each}
			</div>
		</div>
	</header>
	
	<main class="max-w-4xl mx-auto px-6 py-12">
		<section class="mb-12">
			<Text variant="precise" as="h2" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Preview
			</Text>
			<div class="slot p-8 rounded-sm flex items-center justify-center min-h-32">
				<ComponentPreview slug={data.component.slug} name={data.component.name} />
			</div>
		</section>

		<section class="mb-12">
			<Text variant="precise" as="h2" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Use Case
			</Text>
			<div class="slot p-6 rounded-sm">
				<Text variant="body" class="text-matte/80 leading-relaxed">
					{data.component.useCase}
				</Text>
				
				{#if data.useCases.length > 0}
					<div class="mt-6 pt-6 border-t border-stone-200">
						<Heading level={3} class="text-xs mb-3">
							Industry Applications
						</Heading>
						<div class="space-y-4">
							{#each data.useCases as useCase}
								<div>
									<Heading level={4} class="text-xs text-signal mb-1">
										{useCase.title}
										<Text variant="muted" as="span" class="font-normal ml-2">({useCase.industry})</Text>
									</Heading>
									<Text variant="muted" class="text-xs leading-relaxed">
										{useCase.description}
									</Text>
									{#if useCase.features.length > 0}
										<ul class="mt-2 space-y-1">
											{#each useCase.features as feature}
												<li class="font-mono text-[11px] text-matte/50 flex items-start gap-2">
													<span class="text-signal">•</span>
													{feature}
												</li>
											{/each}
										</ul>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</section>

		<section class="mb-12">
			<Text variant="precise" as="h2" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Props API
			</Text>
			<PropsTable 
				props={data.component.props} 
				componentName={data.component.name} 
			/>
		</section>
		
		{#if data.relatedComponents.length > 0}
			<section class="mb-12">
				<Text variant="precise" as="h2" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
					Related Components
				</Text>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
					{#each data.relatedComponents as related}
						<a 
							href="/components/{related.category}/{related.slug}"
							class="slot p-4 rounded-sm hover:ring-2 hover:ring-signal transition-all text-center group"
						>
							<Text variant="precise" as="span" class="text-sm font-medium text-matte group-hover:text-signal transition-colors">
								{related.name}
							</Text>
						</a>
					{/each}
				</div>
			</section>
		{/if}
		
		<section class="text-center py-8 border-t border-stone-200">
			<Heading level={2} class="text-lg mb-2">See it in Action</Heading>
			<Text variant="muted" class="mb-6">
				Explore the {data.component.name} in an interactive dashboard environment.
			</Text>
			<a 
				href={showroomLink}
				class="inline-flex items-center gap-2 px-6 py-3 bg-signal text-white font-mono text-sm font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all"
				style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 40%, rgba(0,0,0,0.15))"
			>
				Customize in Showroom
			</a>
		</section>
		
		{#if data.categoryComponents.length > 0}
			<section class="mt-12 pt-8 border-t border-stone-200">
				<Text variant="precise" as="h2" class="text-[10px] font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
					More {data.categoryInfo.label} Components
				</Text>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					{#each data.categoryComponents as comp}
						<a 
							href="/components/{comp.category}/{comp.slug}"
							class="p-4 border border-stone-200 rounded-sm hover:border-signal transition-colors group"
						>
							<Heading level={3} class="text-sm group-hover:text-signal transition-colors">
								{comp.name}
							</Heading>
							<Text variant="muted" class="text-xs mt-1 line-clamp-2">
								{comp.useCase.split('.')[0]}.
							</Text>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	</main>
</div>
