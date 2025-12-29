export type ComponentCategory = 'data-display' | 'inputs' | 'layout' | 'feedback';

export interface PropDefinition {
	name: string;
	type: string;
	default?: string;
	description: string;
	required?: boolean;
}

export interface ComponentMeta {
	name: string;
	slug: string;
	category: ComponentCategory;
	title: string;
	description: string;
	useCase: string;
	keywords: string[];
	props: PropDefinition[];
	relatedComponents: string[];
	showroomMode?: 'logistics' | 'ledger' | 'settings' | 'devops';
	showroomHighlight?: string;
}

export const categories: Record<ComponentCategory, { label: string; description: string }> = {
	'data-display': {
		label: 'Data Display',
		description: 'Components for visualizing and presenting data in high-density dashboard interfaces.'
	},
	'inputs': {
		label: 'Inputs',
		description: 'Industrial-grade form controls with tactile feedback and strict accessibility compliance.'
	},
	'layout': {
		label: 'Layout',
		description: 'Structural components for organizing dashboard content with Dieter Rams-inspired grid systems.'
	},
	'feedback': {
		label: 'Feedback',
		description: 'Visual indicators and status components for real-time system feedback.'
	}
};

export const componentRegistry: ComponentMeta[] = [	
	{
		name: 'DataTable',
		slug: 'datatable',
		category: 'data-display',
		title: 'Svelte 5 Virtualized DataTable – High-Performance Logistics Grid',
		description: 'Build high-performance logistics dashboards with the DataTable component. Built with Svelte 5 Runes for fine-grained reactivity and "Tactile Matte" design. Open source.',
		useCase: 'Designed for high-density data visualization in Logistics control panels, this Svelte 5 DataTable supports row selection, stock level meters, and status tags. Optimized for 1000+ rows with keyboard navigation support.',
		keywords: ['Svelte virtualized datagrid component', 'dashboard ui svelte', 'accessible svelte components aria'],
		props: [
			{ name: 'items', type: 'DataTableItem[]', default: '[]', description: 'Array of data items to display in the table' },
			{ name: 'selectedIds', type: 'string[]', default: '[]', description: 'Bindable array of selected row IDs' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Pagination', 'Toolbar', 'Tag', 'Meter'],
		showroomMode: 'logistics',
		showroomHighlight: 'datagrid'
	},
	{
		name: 'Ticker',
		slug: 'ticker',
		category: 'data-display',
		title: 'Svelte 5 Financial Ticker – Real-Time Dashboard Metric',
		description: 'Display real-time financial metrics with the Ticker component. Built with Svelte 5 Runes for 60+ updates per second performance. Fintech-ready design.',
		useCase: 'Optimized for Fintech applications, this ticker handles 60+ updates per second using Svelte 5 Runes for fine-grained reactivity. Features tabular numerics for stable layouts during rapid value changes.',
		keywords: ['financial charting library svelte', 'real-time websocket dashboard svelte', 'Svelte runes state management patterns'],
		props: [
			{ name: 'value', type: 'number', default: '0', description: 'The numeric value to display', required: true },
			{ name: 'label', type: 'string', default: "''", description: 'Label displayed above the value' },
			{ name: 'change', type: 'number', default: '0', description: 'Percentage change indicator (positive/negative)' },
			{ name: 'prefix', type: 'string', default: "''", description: 'Prefix before the value (e.g., "$")' },
			{ name: 'suffix', type: 'string', default: "''", description: 'Suffix after the value (e.g., "%")' },
			{ name: 'decimals', type: 'number', default: '2', description: 'Number of decimal places' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Meter', 'Panel'],
		showroomMode: 'ledger',
		showroomHighlight: 'ticker'
	},
	{
		name: 'Meter',
		slug: 'meter',
		category: 'data-display',
		title: 'Svelte 5 LED Meter – Industrial Gauge Component',
		description: 'Visualize values with the LED-style Meter component. Braun-inspired 10-segment display with normal and heat variants. Svelte 5 reactive.',
		useCase: 'Inspired by Braun audio equipment, this LED meter provides instant visual feedback for system metrics. Features subtle jitter animation for authenticity and heat variant for critical thresholds.',
		keywords: ['braun aesthetic UI', 'dieter rams web design', 'dashboard ui svelte'],
		props: [
			{ name: 'value', type: 'number', default: '0', description: 'Percentage value (0-100)' },
			{ name: 'label', type: 'string', default: "''", description: 'Label displayed above the meter' },
			{ name: 'variant', type: "'normal' | 'heat'", default: "'normal'", description: 'Color variant (green or red)' },
			{ name: 'compact', type: 'boolean', default: 'false', description: 'Compact mode without label and padding' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Ticker', 'DataTable', 'Panel'],
		showroomMode: 'logistics',
		showroomHighlight: 'meter'
	},
	{
		name: 'Tag',
		slug: 'tag',
		category: 'data-display',
		title: 'Svelte 5 Status Tag – Dashboard Status Indicator',
		description: 'Display status information with color-coded Tags. Designed for logistics and inventory dashboards with in-stock, low-stock, and out-of-stock variants.',
		useCase: 'Purpose-built for inventory and logistics systems, these status tags use carefully calibrated colors that meet WCAG AA contrast requirements while maintaining the industrial aesthetic.',
		keywords: ['dashboard ui svelte', 'Svelte 5 type safe props', 'accessible svelte components aria'],
		props: [
			{ name: 'variant', type: "'in-stock' | 'low-stock' | 'out-of-stock'", default: "'in-stock'", description: 'Status variant determining color' },
			{ name: 'label', type: 'string', default: "''", description: 'Text content of the tag' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['DataTable', 'Panel'],
		showroomMode: 'logistics',
		showroomHighlight: 'tag'
	},

	{
		name: 'Toggle',
		slug: 'toggle',
		category: 'inputs',
		title: 'Svelte 5 Toggle Switch – Accessible Industrial Control',
		description: 'A tactile toggle switch with strict ARIA roles for accessibility. Features physical "click" feedback design with Svelte 5 bindable state.',
		useCase: 'Designed for high-contrast visibility in Logistics control panels, this Svelte 5 switch uses strict ARIA roles for accessibility. The tactile design mimics physical industrial switches for intuitive operation.',
		keywords: ['toggle switch CSS', 'accessible svelte components aria', 'a11y svelte 5', 'Svelte 5 form handling best practices'],
		props: [
			{ name: 'checked', type: 'boolean', default: 'false', description: 'Bindable checked state' },
			{ name: 'label', type: 'string', default: "''", description: 'Label displayed next to the toggle' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Button', 'Input', 'Select'],
		showroomMode: 'settings',
		showroomHighlight: 'toggle'
	},
	{
		name: 'Button',
		slug: 'button',
		category: 'inputs',
		title: 'Svelte 5 Action Button – Premium Tactile Control',
		description: 'Premium action button with Braun ET66 calculator-inspired design. Features gradient shading, satisfying press animation, and focus states.',
		useCase: 'Inspired by the Braun ET66 calculator, this button features a satisfying press animation and gradient shading that creates depth. The signal orange color demands attention for primary actions.',
		keywords: ['braun aesthetic UI', 'Svelte UI library', 'Svelte 5 type safe props'],
		props: [
			{ name: 'label', type: 'string', default: "'ACTION'", description: 'Button text content' },
			{ name: 'onclick', type: '() => void', description: 'Click handler function' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Toggle', 'Toolbar'],
		showroomMode: 'logistics',
		showroomHighlight: 'et66'
	},
	{
		name: 'Input',
		slug: 'input',
		category: 'inputs',
		title: 'Svelte 5 Text Input – Industrial Form Field',
		description: 'Clean text input with inner shadow styling and optional search icon. Built with Svelte 5 bindable value and focus ring.',
		useCase: 'Designed to feel carved into the interface rather than sitting on top, this input uses inner shadows to create depth. Supports text, email, password, search, and number types.',
		keywords: ['Svelte 5 form handling best practices', 'web design system', 'industrial UI design'],
		props: [
			{ name: 'value', type: 'string', default: "''", description: 'Bindable input value' },
			{ name: 'placeholder', type: 'string', default: "''", description: 'Placeholder text' },
			{ name: 'type', type: "'text' | 'email' | 'password' | 'search' | 'number'", default: "'text'", description: 'Input type' },
			{ name: 'icon', type: "'search' | 'none'", default: "'none'", description: 'Optional icon' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Select', 'Toolbar', 'Toggle'],
		showroomMode: 'logistics',
		showroomHighlight: 'controlstrip'
	},
	{
		name: 'Select',
		slug: 'select',
		category: 'inputs',
		title: 'Svelte 5 Custom Select – Dropdown Control',
		description: 'Custom dropdown select with keyboard navigation and click-outside handling. Industrial styling with consistent design language.',
		useCase: 'This custom select provides a consistent look across browsers while maintaining full keyboard accessibility. Features smooth open/close transitions and clear visual feedback.',
		keywords: ['Svelte 5 form handling best practices', 'web design system', 'accessible svelte components aria'],
		props: [
			{ name: 'value', type: 'string', default: "''", description: 'Bindable selected value' },
			{ name: 'options', type: 'SelectOption[] | string[]', default: '[]', description: 'Array of options (string or {value, label})' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Input', 'Toolbar', 'Toggle'],
		showroomMode: 'logistics',
		showroomHighlight: 'controlstrip'
	},
	{
		name: 'Panel',
		slug: 'panel',
		category: 'layout',
		title: 'Svelte 5 Content Panel – Labeled Container',
		description: 'Labeled content container with inner shadow styling. Uses Svelte 5 snippets for flexible child content rendering.',
		useCase: 'The Panel component groups related content with a consistent label style. Inner shadow creates the "recessed" look characteristic of high-end industrial equipment.',
		keywords: ['web design system', 'Svelte 5 snippets guide', 'industrial UI design'],
		props: [
			{ name: 'label', type: 'string', default: "''", description: 'Panel header label' },
			{ name: 'children', type: 'Snippet', description: 'Panel content (Svelte 5 snippet)', required: true },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Divider', 'Ticker', 'Meter'],
		showroomMode: 'logistics'
	},
	{
		name: 'Toolbar',
		slug: 'toolbar',
		category: 'layout',
		title: 'Svelte 5 Control Strip – Dashboard Toolbar',
		description: 'Unified control strip combining search input, category filter, and action button. Responsive layout for dashboard command bars.',
		useCase: 'This control strip combines multiple input types into a cohesive unit, reducing visual noise while maximizing functionality. Responsive design adapts from stacked on mobile to inline on desktop.',
		keywords: ['dashboard ui svelte', 'web design system', 'Svelte 5 type safe props'],
		props: [
			{ name: 'searchValue', type: 'string', default: "''", description: 'Bindable search input value' },
			{ name: 'categoryValue', type: 'string', default: "'all'", description: 'Bindable category filter value' },
			{ name: 'categories', type: 'string[]', default: "['all', 'electronics', ...]", description: 'Category options array' },
			{ name: 'onadd', type: '() => void', description: 'Add button click handler' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Input', 'Select', 'Button', 'DataTable'],
		showroomMode: 'logistics',
		showroomHighlight: 'controlstrip'
	},
	{
		name: 'Pagination',
		slug: 'pagination',
		category: 'layout',
		title: 'Svelte 5 Pagination – Scalable Page Navigator',
		description: 'Full-featured pagination with first/last buttons and smart ellipsis for large page counts. Aria-labeled for screen readers.',
		useCase: 'Designed to scale from 5 to 500 pages, this pagination component uses smart ellipsis logic to keep the UI compact while maintaining context. All buttons include proper ARIA labels.',
		keywords: ['accessible svelte components aria', 'dashboard ui svelte', 'Svelte 5 type safe props'],
		props: [
			{ name: 'currentPage', type: 'number', default: '1', description: 'Bindable current page number' },
			{ name: 'totalPages', type: 'number', default: '5', description: 'Total number of pages' },
			{ name: 'siblingCount', type: 'number', default: '1', description: 'Pages to show on each side of current' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['DataTable', 'Toolbar'],
		showroomMode: 'logistics',
		showroomHighlight: 'pagination'
	},
	{
		name: 'Divider',
		slug: 'divider',
		category: 'layout',
		title: 'Svelte 5 Section Divider – Visual Separator',
		description: 'Clean horizontal or vertical divider with optional label. Useful for sectioning dashboard content.',
		useCase: 'Simple but essential, the Divider creates visual breathing room between sections. Optional label support makes it useful for creating named sections.',
		keywords: ['web design system', 'dieter rams web design', 'industrial UI design'],
		props: [
			{ name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Divider orientation' },
			{ name: 'label', type: 'string', description: 'Optional center label' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Panel', 'Toolbar'],
		showroomMode: 'settings'
	},

	{
		name: 'Avatar',
		slug: 'avatar',
		category: 'feedback',
		title: 'Svelte 5 Avatar – User Identity Display',
		description: 'Circular avatar component for displaying user photos or initials. Clean industrial styling.',
		useCase: 'A simple but polished avatar component for displaying user identity. Falls back to initials when no image is provided.',
		keywords: ['Svelte UI library', 'web design system'],
		props: [
			{ name: 'src', type: 'string', description: 'Image source URL' },
			{ name: 'alt', type: 'string', description: 'Alt text for accessibility' },
			{ name: 'initials', type: 'string', description: 'Fallback initials when no image' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Tag', 'Panel'],
		showroomMode: 'settings'
	},
	{
		name: 'Plot',
		slug: 'plot',
		category: 'data-display',
		title: 'Svelte 5 Micro-Chart – Data Visualization',
		description: 'SVG-based step charts and bar histograms. Pure CSS styling with no client-side charting libraries. Ideal for sparklines.',
		useCase: 'Designed for high-performance sparklines and data previews. Zero-dependency implementation ensures instant loading and perfect scaling.',
		keywords: ['svelte charts svg', 'sparklines svelte', 'dashboard analytics'],
		props: [
			{ name: 'data', type: 'PlotDataPoint[]', default: '[]', description: 'Array of data points { label, value }' },
			{ name: 'type', type: "'bar' | 'step'", default: "'bar'", description: 'Chart visualization type' },
			{ name: 'height', type: 'number', default: '120', description: 'Chart height in pixels' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Ticker', 'Panel'],
		showroomMode: 'ledger',
		showroomHighlight: 'plot'
	},
	{
		name: 'Period Selector',
		slug: 'period-selector',
		category: 'inputs',
		title: 'Svelte 5 Period Selector – Segmented Control',
		description: 'Physical radio-button style segmented control for time range selection. Tactile feedback with active state handling.',
		useCase: 'Provides immediate time-span switching for financial charts. The physical button aesthetic gives clear affordance for interaction.',
		keywords: ['segmented control svelte', 'radio group styling', 'financial dashboard ui'],
		props: [
			{ name: 'value', type: 'string', default: "'1D'", description: 'Bindable selected value' },
			{ name: 'options', type: 'string[]', default: "['1H', '1D', '1W', '1M']", description: 'Array of option labels' },
			{ name: 'class', type: 'string', description: 'Additional CSS classes' }
		],
		relatedComponents: ['Plot', 'Toolbar'],
		showroomMode: 'ledger'
	}
];

export function getComponentBySlug(slug: string): ComponentMeta | undefined {
	return componentRegistry.find(c => c.slug === slug);
}

export function getComponentsByCategory(category: ComponentCategory): ComponentMeta[] {
	return componentRegistry.filter(c => c.category === category);
}
export function getCategorySlugs(): ComponentCategory[] {
	return Object.keys(categories) as ComponentCategory[];
}

export function getShowroomLink(component: ComponentMeta): string {
	const baseUrl = `/showroom?mode=${component.showroomMode || 'logistics'}`;
	if (component.showroomHighlight) {
		return `${baseUrl}&focus=${component.showroomHighlight}`;
	}
	return baseUrl;
}
