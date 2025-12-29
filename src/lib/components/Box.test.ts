import { render, screen } from '@testing-library/svelte';
import Box from './Box.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Box', () => {
	it('renders div by default', () => {
		render(Box, { children: createRawSnippet(() => ({ render: () => 'Content' })) });
		const div = screen.getByText('Content');
		expect(div.tagName).toBe('DIV');
	});

	it('renders polimorphic element', () => {
		render(Box, { as: 'section', children: createRawSnippet(() => ({ render: () => 'Section' })) });
		const section = screen.getByText('Section');
		expect(section.tagName).toBe('SECTION');
	});

	it('passes classes', () => {
		render(Box, { class: 'bg-red-500', children: createRawSnippet(() => ({ render: () => 'Red' })) });
		const div = screen.getByText('Red');
		expect(div).toHaveClass('bg-red-500');
	});
});
