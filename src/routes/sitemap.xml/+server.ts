import { componentRegistry, categories } from '$lib/data/componentRegistry';

const BASE_URL = 'https://takt-ui.app';

export async function GET() {
	const pages = [
		'/',
		'/components',
		'/showroom'
	];

	// Add Category Pages
	Object.keys(categories).forEach(category => {
		pages.push(`/components/${category}`);
	});

	// Add Component Pages
	componentRegistry.forEach(component => {
		pages.push(`/components/${component.category}/${component.slug}`);
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(
			(page) => `
		<url>
			<loc>${BASE_URL}${page}</loc>
			<changefreq>weekly</changefreq>
			<priority>${page === '/' ? '1.0' : page.split('/').length > 2 ? '0.8' : '0.9'}</priority>
		</url>`
		)
		.join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
