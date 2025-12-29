import { render, screen } from '@testing-library/svelte';
import Heading from './Heading.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Heading', () => {
	it('renders with default h1 tag', () => {
		render(Heading, { children: createRawSnippet(() => ({ render: () => 'Hello World' })) });
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveTextContent('Hello World');
	});

	it('renders with specified level', () => {
		render(Heading, { level: 3, children: createRawSnippet(() => ({ render: () => 'Subtitle' })) });
		const heading = screen.getByRole('heading', { level: 3 });
		expect(heading).toHaveTextContent('Subtitle');
	});

	it('applies correct typography classes based on level', () => {
		render(Heading, { level: 1, children: createRawSnippet(() => ({ render: () => 'Title' })) });
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveClass('text-3xl'); // Assuming Takt H1 size
	});
});
