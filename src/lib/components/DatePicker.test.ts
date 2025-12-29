import { render, screen } from '@testing-library/svelte';
import DatePicker from './DatePicker.svelte';
import { describe, it, expect } from 'vitest';

describe('DatePicker', () => {
	it('renders date input', () => {
		render(DatePicker);
		const input = screen.getByTestId('date-picker'); // assuming custom id or use label
		// Or use type date
		// expect(input).toHaveAttribute('type', 'date');
        // Let's assume we use class or type
	});
});
