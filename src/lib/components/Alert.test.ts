import { render, screen } from '@testing-library/svelte';
import Alert from './Alert.svelte';
import { describe, it, expect } from 'vitest';
import { createRawSnippet } from 'svelte';

describe('Alert', () => {
	it('renders alert content', () => {
		render(Alert, { children: createRawSnippet(() => ({ render: () => 'Alert Message' })) });
		const alert = screen.getByRole('alert');
		expect(alert).toHaveTextContent('Alert Message');
	});
});
