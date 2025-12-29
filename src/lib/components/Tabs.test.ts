import { render, screen } from '@testing-library/svelte';
import Tabs from './Tabs.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Tabs', () => {
	it('renders tabs list', () => {
		render(Tabs, { 
			defaultValue: 'tab1',
			items: [
				{ value: 'tab1', label: 'Tab 1', content: createRawSnippet(() => ({ render: () => 'Content 1' })) },
				{ value: 'tab2', label: 'Tab 2', content: createRawSnippet(() => ({ render: () => 'Content 2' })) }
			]
		});
		const tab1 = screen.getByText('Tab 1');
		expect(tab1).toBeInTheDocument();
	});
});
