import { render, screen } from '@testing-library/svelte';
import Checkbox from './Checkbox.svelte';
import { describe, it, expect } from 'vitest';

describe('Checkbox', () => {
	it('renders input type checkbox', () => {
		render(Checkbox, { checked: false });
		const input = screen.getByRole('checkbox');
		expect(input).toBeInTheDocument();
	});

	it('supports checked state', () => {
		render(Checkbox, { checked: true });
		const input = screen.getByRole('checkbox');
		expect(input).toBeChecked();
	});
});
