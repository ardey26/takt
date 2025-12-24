<script lang="ts">
	import { cn } from '$lib/utils';
	import SchemaOrg from './SchemaOrg.svelte';
	import { generateBreadcrumbSchema } from '$lib/utils/generateMeta';
	
	interface BreadcrumbItem {
		name: string;
		href: string;
	}
	
	interface Props {
		items: BreadcrumbItem[];
		class?: string;
	}
	
	let { items, class: className }: Props = $props();
	
	let schema = $derived(generateBreadcrumbSchema(
		items.map(item => ({ name: item.name, url: item.href }))
	));
</script>

<SchemaOrg {schema} />

<nav aria-label="Breadcrumb" class={cn("font-mono text-xs", className)}>
	<ol class="flex items-center gap-2">
		{#each items as item, i}
			<li class="flex items-center gap-2">
				{#if i === items.length - 1}
					<span class="text-matte font-medium" aria-current="page">
						{item.name}
					</span>
				{:else}
					<a 
						href={item.href}
						class="text-matte/60 hover:text-matte transition-colors"
					>
						{item.name}
					</a>
					<span class="text-matte/30" aria-hidden="true">›</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
