import { render, screen } from '@testing-library/svelte';
import Stepper from './Stepper.svelte';
import { describe, it, expect } from 'vitest';

describe('Stepper', () => {
	it('renders steps', () => {
		render(Stepper, { steps: ['Step 1', 'Step 2'], currentStep: 0 });
		const step1 = screen.getByText('Step 1');
		expect(step1).toBeInTheDocument();
	});
});
