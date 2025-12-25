import type { PageServerLoad } from './$types';
import { componentRegistry, categories, getCategorySlugs } from '$lib/data/componentRegistry';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const categoryList = getCategorySlugs().map(slug => ({
		slug,
		...categories[slug],
		componentCount: componentRegistry.filter(c => c.category === slug).length
	}));

	return {
		categories: categoryList,
		totalComponents: componentRegistry.length
	};
};
