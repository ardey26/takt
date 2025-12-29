import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { 
	categories, 
	getComponentsByCategory, 
	type ComponentCategory 
} from '$lib/data/componentRegistry';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category as ComponentCategory;
	
	if (!categories[category]) {
		throw error(404, `Category "${category}" not found`);
	}
	
	const components = getComponentsByCategory(category);
	
	return {
		category,
		categoryInfo: categories[category],
		components
	};
};
