import { render, screen } from '@testing-library/svelte';
import Accordion from './Accordion.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Accordion', () => {
	it('renders headers', () => {
		render(Accordion, { 
			items: [
				{ value: 'item1', trigger: 'Section 1', content: createRawSnippet(() => ({ render: () => 'Content 1' })) }
			]
		});
		const header = screen.getByText('Section 1');
		expect(header).toBeInTheDocument();
	});
});
