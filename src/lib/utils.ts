import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * Merges Tailwind CSS classes intelligently.
 * User-provided classes override base component classes.
 * 
 * @example
 * cn("bg-stone-50 p-4", "bg-red-500") // => "p-4 bg-red-500"
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
