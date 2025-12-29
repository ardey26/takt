import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		conditions: ['browser']
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['src/vitest-setup.ts'],
		include: ['src/**/*.{test,spec}.{js,ts}'],
		server: {
			deps: { inline: ['@sveltejs/kit'] }
		}
	}
});
