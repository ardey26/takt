import type { ComponentMeta } from '$lib/data/componentRegistry';

export interface PageMeta {
	title: string;
	description: string;
	keywords: string;
	ogTitle: string;
	ogDescription: string;
	canonical: string;
}

const BASE_URL = 'https://takt.ui';
const BRAND = 'Takt';
const TAGLINE = 'Svelte 5 & Tailwind Industrial UI';

export function generateComponentMeta(component: ComponentMeta, baseUrl = BASE_URL): PageMeta {
	const canonical = `${baseUrl}/components/${component.category}/${component.slug}`;
	
	return {
		title: `${component.name} – ${TAGLINE} | ${BRAND}`,
		description: component.description,
		keywords: [...component.keywords, 'Svelte 5', 'Tailwind CSS', 'Industrial UI', BRAND].join(', '),
		ogTitle: component.title,
		ogDescription: component.description,
		canonical
	};
}

export function generateCategoryMeta(
	category: string, 
	categoryLabel: string, 
	categoryDescription: string,
	baseUrl = BASE_URL
): PageMeta {
	const title = `${categoryLabel} Components – ${TAGLINE} | ${BRAND}`;
	const description = `${categoryDescription} Built with Svelte 5 Runes for fine-grained reactivity.`;
	
	return {
		title,
		description,
		keywords: `${categoryLabel}, Svelte 5 components, dashboard UI, industrial design, ${BRAND}`,
		ogTitle: title,
		ogDescription: description,
		canonical: `${baseUrl}/components/${category}`
	};
}

export function generateHubMeta(baseUrl = BASE_URL): PageMeta {
	const title = `Svelte 5 Industrial UI Components – ${BRAND} Design System`;
	const description = 'High-performance Svelte 5 component library with Dieter Rams-inspired industrial design. Built for Fintech, Logistics, and DevOps dashboards. Open source.';
	
	return {
		title,
		description,
		keywords: 'Svelte UI library, Svelte 5 runes, industrial UI design, dashboard components, Dieter Rams, Braun aesthetic, Tailwind CSS, open source',
		ogTitle: title,
		ogDescription: description,
		canonical: `${baseUrl}/components`
	};
}

export function generateBreadcrumbSchema(
	items: { name: string; url: string }[],
	baseUrl = BASE_URL
): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'itemListElement': items.map((item, index) => ({
			'@type': 'ListItem',
			'position': index + 1,
			'name': item.name,
			'item': item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
		}))
	};
}

export function generateSoftwareSchema(baseUrl = BASE_URL): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareSourceCode',
		'name': 'Takt UI',
		'programmingLanguage': {
			'@type': 'ComputerLanguage',
			'name': 'Svelte 5',
			'version': '5.0.0'
		},
		'runtimePlatform': 'Browser',
		'codeRepository': 'https://github.com/takt/takt',
		'license': 'https://opensource.org/licenses/MIT',
		'description': 'A high-performance Svelte 5 component library with Industrial design aesthetics for Fintech and Logistics.',
		'applicationCategory': 'DeveloperApplication',
		'offers': {
			'@type': 'Offer',
			'price': '0',
			'priceCurrency': 'USD'
		}
	};
}

export function generateComponentSchema(component: ComponentMeta, baseUrl = BASE_URL): object {
	return {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		'headline': component.title,
		'description': component.description,
		'author': {
			'@type': 'Organization',
			'name': BRAND
		},
		'publisher': {
			'@type': 'Organization',
			'name': BRAND,
			'url': baseUrl
		},
		'mainEntityOfPage': {
			'@type': 'WebPage',
			'@id': `${baseUrl}/components/${component.category}/${component.slug}`
		},
		'keywords': component.keywords.join(', '),
		'about': {
			'@type': 'SoftwareSourceCode',
			'name': component.name,
			'programmingLanguage': 'Svelte 5'
		}
	};
}
