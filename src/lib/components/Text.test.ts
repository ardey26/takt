import { render, screen } from '@testing-library/svelte';
import Text from './Text.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Text', () => {
	it('renders paragraph by default', () => {
		render(Text, { children: createRawSnippet(() => ({ render: () => 'Body text' })) });
		const textNode = screen.getByText('Body text');
		// Text component renders the wrapper, snippet is inside. 
		// If text matches direct child, closest element is the P if we passed plain text.
		// If we passed plain text in snippet, getByText returns the element containing it?
		// Svelte 5 render of string snippet likely wraps it? No.
		// Let's assume P contains text.
		// If getByText returns text node, generic matcher returns element.
		const p = textNode.tagName ? textNode : textNode.parentElement;
		// Actually best to lookup by Role if possible or use container.
		expect(p?.tagName).toBe('P');
	});

	it('renders precise variant correct classes', () => {
		render(Text, { variant: 'precise', children: createRawSnippet(() => ({ render: () => 'Monospace' })) });
		const text = screen.getByText('Monospace');
		// The classes are on the wrapper P
		expect(text).toHaveClass('font-mono');
		expect(text).toHaveClass('text-xs');
	});
});
