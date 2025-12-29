import { render, screen } from '@testing-library/svelte';
import Menu from './Menu.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Menu', () => {
	it('renders trigger', () => {
		render(Menu, { 
			trigger: createRawSnippet(() => ({ render: () => '<button>Trigger</button>' })),
			items: [{ label: 'Item 1', action: () => {} }]
		});
		const trigger = screen.getByText('Trigger');
		expect(trigger).toBeInTheDocument();
	});

    // Validating open state usually requires interaction, but for simple unit check:
	it('renders items', () => {
        // Assume default open or force open prop for test
		render(Menu, { 
            open: true,
			trigger: createRawSnippet(() => ({ render: () => '<button>Trigger</button>' })),
			items: [{ label: 'Item 1', action: () => {} }]
		});
		const item = screen.getByText('Item 1');
		expect(item).toBeInTheDocument();
	});
});
