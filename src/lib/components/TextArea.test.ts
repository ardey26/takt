import { render, screen } from '@testing-library/svelte';
import TextArea from './TextArea.svelte';
import { describe, it, expect } from 'vitest';

describe('TextArea', () => {
	it('renders textarea element', () => {
		render(TextArea, { placeholder: 'Enter text' });
		const textarea = screen.getByPlaceholderText('Enter text');
		expect(textarea.tagName).toBe('TEXTAREA');
	});
});
