import { render, screen } from '@testing-library/svelte';
import Spinner from './Spinner.svelte';
import { describe, it, expect } from 'vitest';

describe('Spinner', () => {
	it('renders spinner', () => {
		render(Spinner);
		const spinner = screen.getByRole('status');
		expect(spinner).toBeInTheDocument();
	});
});
