import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { 
	getComponentBySlug, 
	getComponentsByCategory,
	categories,
	type ComponentCategory 
} from '$lib/data/componentRegistry';
import { getUseCases } from '$lib/data/useCases';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category as ComponentCategory;
	const componentSlug = params.component;
	
	// Validate category
	if (!categories[category]) {
		throw error(404, `Category "${category}" not found`);
	}
	
	// Find component
	const component = getComponentBySlug(componentSlug);
	
	if (!component) {
		throw error(404, `Component "${componentSlug}" not found`);
	}
	
	// Verify component is in this category
	if (component.category !== category) {
		throw error(404, `Component "${componentSlug}" is not in category "${category}"`);
	}
	
	// Get use cases
	const useCases = getUseCases(componentSlug);
	
	// Get related components with full metadata
	const relatedComponents = component.relatedComponents
		.map(slug => getComponentBySlug(slug.toLowerCase()))
		.filter(Boolean);
	
	// Get other components in same category (for "More in this category" section)
	const categoryComponents = getComponentsByCategory(category)
		.filter(c => c.slug !== componentSlug)
		.slice(0, 3);
	
	return {
		component,
		category,
		categoryInfo: categories[category],
		useCases,
		relatedComponents,
		categoryComponents
	};
};
