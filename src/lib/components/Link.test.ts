import { render, screen } from '@testing-library/svelte';
import Link from './Link.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Link', () => {
	it('renders anchor tag', () => {
		render(Link, { href: '#', children: createRawSnippet(() => ({ render: () => 'Click me' })) });
		const link = screen.getByRole('link', { name: 'Click me' });
		expect(link).toHaveAttribute('href', '#');
	});

	it('applies styling classes', () => {
		render(Link, { href: '#', children: createRawSnippet(() => ({ render: () => 'Styled' })) });
		const link = screen.getByRole('link');
		expect(link).toHaveClass('text-signal');
		expect(link).toHaveClass('hover:underline');
	});
});
