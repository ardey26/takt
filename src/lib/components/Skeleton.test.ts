import { render, screen } from '@testing-library/svelte';
import Skeleton from './Skeleton.svelte';
import { describe, it, expect } from 'vitest';

describe('Skeleton', () => {
	it('renders skeleton div', () => {
		render(Skeleton, { class: 'w-[100px] h-[20px]' });
		// Usually no role, check for animate-pulse class
		const skeleton = screen.getByTestId('skeleton'); // requires adding test-id
		expect(skeleton).toHaveClass('animate-pulse');
	});
});
