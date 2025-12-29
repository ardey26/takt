import { render, screen } from '@testing-library/svelte';
import Drawer from './Drawer.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Drawer', () => {
	it('does not render when closed', () => {
		render(Drawer, { open: false, children: createRawSnippet(() => ({ render: () => '<div>Content</div>' })) });
		const content = screen.queryByText('Content');
		expect(content).not.toBeInTheDocument();
	});

	it('renders content when open', () => {
		render(Drawer, { open: true, children: createRawSnippet(() => ({ render: () => '<div>Content</div>' })) });
		const content = screen.getByText('Content');
		expect(content).toBeInTheDocument();
	});
});
