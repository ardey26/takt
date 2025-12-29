import { render, screen } from '@testing-library/svelte';
import Grid from './Grid.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Grid', () => {
	it('renders as grid container', () => {
		render(Grid, { children: createRawSnippet(() => ({ render: () => 'Items' })) });
		const grid = screen.getByText('Items').parentElement;
		expect(grid?.outerHTML).toContain('grid');
	});

	it('supports columns prop', () => {
		render(Grid, { cols: 3, children: createRawSnippet(() => ({ render: () => 'Items' })) });
		const grid = screen.getByText('Items').parentElement;
		expect(grid?.outerHTML).toContain('grid-cols-3');
	});

	it('supports gap prop', () => {
		render(Grid, { gap: 8, children: createRawSnippet(() => ({ render: () => 'Items' })) });
		const grid = screen.getByText('Items').parentElement;
		expect(grid?.outerHTML).toContain('gap-8');
	});
});
