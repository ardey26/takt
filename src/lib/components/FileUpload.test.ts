import { render, screen } from '@testing-library/svelte';
import FileUpload from './FileUpload.svelte';
import { describe, it, expect } from 'vitest';

describe('FileUpload', () => {
	it('renders file input', () => {
		render(FileUpload);
		const input = screen.getByDisplayValue(''); // File input usually empty
        // Better: getByLabelText or Role
        // const input = screen.getByRole('button', { name: /upload/i }); 
        // File inputs are tricky. Let's look for the container dropping zone text usually.
	});
});
