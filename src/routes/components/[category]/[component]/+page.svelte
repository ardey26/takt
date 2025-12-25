<script lang="ts">
	import Breadcrumbs from '$lib/components/seo/Breadcrumbs.svelte';
	import PropsTable from '$lib/components/seo/PropsTable.svelte';
	import SchemaOrg from '$lib/components/seo/SchemaOrg.svelte';
	import { generateComponentMeta, generateComponentSchema } from '$lib/utils/generateMeta';
	import { getShowroomLink } from '$lib/data/componentRegistry';
	import Button from '$lib/components/Button.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Meter from '$lib/components/Meter.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import Panel from '$lib/components/Panel.svelte';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	
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
	
	let toggleChecked = $state(true);
	let currentPage = $state(3);
	let inputValue = $state('');
	let selectValue = $state('electronics');
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
			
			<h1 class="text-2xl font-bold text-matte tracking-tight mb-3">
				{data.component.title}
			</h1>
			
			<p class="font-mono text-sm text-matte/60 max-w-2xl leading-relaxed">
				{data.component.description}
			</p>
			
			<div class="flex flex-wrap gap-2 mt-4">
				{#each data.component.keywords.slice(0, 3) as keyword}
					<span class="font-mono text-[10px] text-matte/40 bg-stone-200 px-2 py-1 rounded uppercase tracking-wide">
						{keyword}
					</span>
				{/each}
			</div>
		</div>
	</header>
	
	<main class="max-w-4xl mx-auto px-6 py-12">
		<section class="mb-12">
			<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Preview
			</h2>
			<div class="slot p-8 rounded-sm flex items-center justify-center min-h-32">
				{#if data.component.slug === 'button'}
					<Button label="Initialize System" />
				{:else if data.component.slug === 'toggle'}
					<Toggle bind:checked={toggleChecked} label="Active" />
				{:else if data.component.slug === 'meter'}
					<Meter value={72} label="Capacity" />
				{:else if data.component.slug === 'tag'}
					<div class="flex gap-3">
						<Tag variant="in-stock" label="In Stock" />
						<Tag variant="low-stock" label="Low Stock" />
						<Tag variant="out-of-stock" label="Out of Stock" />
					</div>
				{:else if data.component.slug === 'ticker'}
					<Ticker value={24853.42} label="Portfolio Value" prefix="$" change={2.34} />
				{:else if data.component.slug === 'panel'}
					<Panel label="System Status">
						<span>All systems operational</span>
					</Panel>
				{:else if data.component.slug === 'input'}
					<Input bind:value={inputValue} placeholder="Search inventory..." icon="search" class="max-w-xs" />
				{:else if data.component.slug === 'select'}
					<Select bind:value={selectValue} options={['all', 'electronics', 'mechanical', 'cables']} />
				{:else if data.component.slug === 'pagination'}
					<Pagination bind:currentPage={currentPage} totalPages={12} />
				{:else}
					<div class="font-mono text-sm text-matte/40">
						Component preview
					</div>
				{/if}
			</div>
		</section>

		<section class="mb-12">
			<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Use Case
			</h2>
			<div class="slot p-6 rounded-sm">
				<p class="font-mono text-sm text-matte/80 leading-relaxed">
					{data.component.useCase}
				</p>
				
				{#if data.useCases.length > 0}
					<div class="mt-6 pt-6 border-t border-stone-200">
						<h3 class="font-mono text-xs font-bold text-matte mb-3">
							Industry Applications
						</h3>
						<div class="space-y-4">
							{#each data.useCases as useCase}
								<div>
									<h4 class="font-mono text-xs text-signal font-medium mb-1">
										{useCase.title}
										<span class="text-matte/40 font-normal ml-2">({useCase.industry})</span>
									</h4>
									<p class="font-mono text-xs text-matte/60 leading-relaxed">
										{useCase.description}
									</p>
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
			<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
				Props API
			</h2>
			<PropsTable 
				props={data.component.props} 
				componentName={data.component.name} 
			/>
		</section>
		
		{#if data.relatedComponents.length > 0}
			<section class="mb-12">
				<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
					Related Components
				</h2>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
					{#each data.relatedComponents as related}
						<a 
							href="/components/{related.category}/{related.slug}"
							class="slot p-4 rounded-sm hover:ring-2 hover:ring-signal transition-all text-center group"
						>
							<span class="font-mono text-sm font-medium text-matte group-hover:text-signal transition-colors">
								{related.name}
							</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}
		
		<section class="text-center py-8 border-t border-stone-200">
			<h2 class="text-lg font-bold text-matte mb-2">See it in Action</h2>
			<p class="font-mono text-sm text-matte/60 mb-6">
				Explore the {data.component.name} in an interactive dashboard environment.
			</p>
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
				<h2 class="text-[10px] font-mono font-medium tracking-[0.2em] text-matte/60 uppercase mb-4">
					More {data.categoryInfo.label} Components
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					{#each data.categoryComponents as comp}
						<a 
							href="/components/{comp.category}/{comp.slug}"
							class="p-4 border border-stone-200 rounded-sm hover:border-signal transition-colors group"
						>
							<h3 class="font-mono text-sm font-medium text-matte group-hover:text-signal transition-colors">
								{comp.name}
							</h3>
							<p class="font-mono text-xs text-matte/50 mt-1 line-clamp-2">
								{comp.useCase.split('.')[0]}.
							</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	</main>
</div>
