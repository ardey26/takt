import { render, screen } from '@testing-library/svelte';
import Slider from './Slider.svelte';
import { describe, it, expect } from 'vitest';

describe('Slider', () => {
	it('renders range input', () => {
		render(Slider, { min: 0, max: 100 });
		const slider = screen.getByRole('slider');
		expect(slider).toBeInTheDocument();
	});

	it('reflects value', () => {
		render(Slider, { value: 50 });
		const slider = screen.getByRole('slider');
		expect(slider).toHaveValue('50');
	});
});
