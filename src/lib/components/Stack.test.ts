import { render, screen } from '@testing-library/svelte';
import Stack from './Stack.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Stack', () => {
	it('renders as flex container', () => {
		render(Stack, { children: createRawSnippet(() => ({ render: () => '<div>Item 1</div><div>Item 2</div>' })) });
		const stack = screen.getByText('Item 1').parentElement;
		expect(stack?.outerHTML).toContain('flex');
		expect(stack?.outerHTML).toContain('flex-col');
	});

	it('supports horizontal direction', () => {
		render(Stack, { direction: 'row', children: createRawSnippet(() => ({ render: () => 'Items' })) });
		const stack = screen.getByText('Items').parentElement;
		expect(stack?.outerHTML).toContain('flex-row');
	});

	it('supports gap prop', () => {
		render(Stack, { gap: 4, children: createRawSnippet(() => ({ render: () => 'Items' })) });
		const stack = screen.getByText('Items').parentElement;
		expect(stack?.outerHTML).toContain('gap-4');
	});
});
