import { render, screen } from '@testing-library/svelte';
import Radio from './Radio.svelte';
import { describe, it, expect } from 'vitest';

describe('Radio', () => {
	it('renders input type radio', () => {
		render(Radio, { value: '1' });
		const input = screen.getByRole('radio');
		expect(input).toBeInTheDocument();
	});

	it('supports checked state via group', () => {
		render(Radio, { group: '1', value: '1' });
		const input = screen.getByRole('radio');
		expect(input).toBeChecked();
	});
});
