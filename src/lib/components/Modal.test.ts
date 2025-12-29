import { render, screen } from '@testing-library/svelte';
import Modal from './Modal.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Modal', () => {
	it('does not render when closed', () => {
		render(Modal, { open: false, children: createRawSnippet(() => ({ render: () => '<div>Content</div>' })) });
		const content = screen.queryByText('Content');
		expect(content).not.toBeInTheDocument();
	});

	it('renders content when open', () => {
		render(Modal, { open: true, children: createRawSnippet(() => ({ render: () => '<div>Content</div>' })) });
		const content = screen.getByText('Content');
		expect(content).toBeInTheDocument();
	});
});
