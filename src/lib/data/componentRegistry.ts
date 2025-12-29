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
	},
	{
		name: 'Heading',
		slug: 'heading',
		category: 'data-display',
		title: 'Svelte 5 Heading – Typographic Hierarchy',
		description: 'Semantic heading component with strict typographic scale. Ensures accessible hierarchy h1-h6.',
		useCase: 'Enforces the design system typographic scale across the dashboard.',
		keywords: ['typography', 'heading', 'svelte component'],
		props: [
			{ name: 'level', type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'", default: "'h1'", description: 'Heading level' },
			{ name: 'children', type: 'Snippet', description: 'Heading content' }
		],
		relatedComponents: ['Text'],
		showroomMode: 'logistics'
	},
	{
		name: 'Text',
		slug: 'text',
		category: 'data-display',
		title: 'Svelte 5 Text – Body Typography',
		description: 'Polymorphic text component for body copy, labels, and muted text.',
		useCase: 'Standardizes body text styles including precise monospace numbers and muted variants.',
		keywords: ['typography', 'text', 'paragraph'],
		props: [
			{ name: 'variant', type: "'body' | 'muted' | 'signal' | 'precise'", default: "'body'", description: 'Text style variant' },
			{ name: 'as', type: "'p' | 'span' | 'div' | 'label'", default: "'p'", description: 'HTML element' }
		],
		relatedComponents: ['Heading', 'Link'],
		showroomMode: 'logistics'
	},
	{
		name: 'Link',
		slug: 'link',
		category: 'data-display',
		title: 'Svelte 5 Link – Hyperlink',
		description: 'Styled anchor tag for navigation links.',
		useCase: 'Standard link styling with hover effects.',
		keywords: ['navigation', 'link', 'anchor'],
		props: [
			{ name: 'href', type: 'string', description: 'Destination URL' },
			{ name: 'children', type: 'Snippet', description: 'Link text' }
		],
		relatedComponents: ['Text', 'Button'],
		showroomMode: 'logistics'
	},
	{
		name: 'Box',
		slug: 'box',
		category: 'layout',
		title: 'Svelte 5 Box – Layout Primitive',
		description: 'Low-level polymorphic layout container.',
		useCase: 'Use for custom containers that need standard spacing or styling without semantic baggage.',
		keywords: ['layout', 'div', 'container'],
		props: [
			{ name: 'as', type: 'string', default: "'div'", description: 'HTML tag' },
			{ name: 'class', type: 'string', description: 'Tailwind classes' }
		],
		relatedComponents: ['Stack', 'Grid'],
		showroomMode: 'layout'
	},
	{
		name: 'Stack',
		slug: 'stack',
		category: 'layout',
		title: 'Svelte 5 Stack – Flex Layout',
		description: 'Flexbox container for vertical or horizontal stacks with consistent spacing.',
		useCase: 'Primary layout tool for arranging elements in a single direction.',
		keywords: ['layout', 'flex', 'stack'],
		props: [
			{ name: 'direction', type: "'row' | 'col' | 'row-reverse' | 'col-reverse'", default: "'col'", description: 'Flex direction' },
			{ name: 'gap', type: 'number', default: '2', description: 'Gap spacing (tailwind scale)' }
		],
		relatedComponents: ['Box', 'Grid'],
		showroomMode: 'layout'
	},
	{
		name: 'Grid',
		slug: 'grid',
		category: 'layout',
		title: 'Svelte 5 Grid – Grid Layout',
		description: 'CSS Grid container for 2D layouts.',
		useCase: 'Used for dashboards, card grids, and complex page layouts.',
		keywords: ['layout', 'grid'],
		props: [
			{ name: 'cols', type: 'number', default: '1', description: 'Number of columns' },
			{ name: 'gap', type: 'number', default: '4', description: 'Gap spacing' }
		],
		relatedComponents: ['Stack', 'Box'],
		showroomMode: 'layout'
	},
	{
		name: 'Checkbox',
		slug: 'checkbox',
		category: 'inputs',
		title: 'Svelte 5 Checkbox – Boolean Input',
		description: 'Industrial style checkbox with distinct checked state.',
		useCase: 'Selection of individual options or boolean settings.',
		keywords: ['form', 'input', 'checkbox'],
		props: [
			{ name: 'checked', type: 'boolean', default: 'false', description: 'Bindable checked state' },
			{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disabled state' }
		],
		relatedComponents: ['Radio', 'Toggle'],
		showroomMode: 'settings'
	},
	{
		name: 'Radio',
		slug: 'radio',
		category: 'inputs',
		title: 'Svelte 5 Radio – Option Selection',
		description: 'Radio button for mutually exclusive options.',
		useCase: 'Selection of one option from a set.',
		keywords: ['form', 'input', 'radio'],
		props: [
			{ name: 'group', type: 'any', description: 'Bindable group value' },
			{ name: 'value', type: 'any', description: 'Value of this option' }
		],
		relatedComponents: ['Checkbox', 'Select'],
		showroomMode: 'settings'
	},
	{
		name: 'TextArea',
		slug: 'textarea',
		category: 'inputs',
		title: 'Svelte 5 TextArea – Multiline Input',
		description: 'Resizable text area for longer content.',
		useCase: 'Comments, descriptions, or raw data input.',
		keywords: ['form', 'input', 'textarea'],
		props: [
			{ name: 'value', type: 'string', description: 'Bindable text value' },
			{ name: 'rows', type: 'number', default: '3', description: 'Initial height in rows' }
		],
		relatedComponents: ['Input'],
		showroomMode: 'settings'
	},
	{
		name: 'Slider',
		slug: 'slider',
		category: 'inputs',
		title: 'Svelte 5 Slider – Range Input',
		description: 'Range slider with custom track and thumb styling.',
		useCase: 'Selecting numeric values within a range (e.g., volume, brightness).',
		keywords: ['form', 'input', 'range'],
		props: [
			{ name: 'value', type: 'number', description: 'Bindable value' },
			{ name: 'min', type: 'number', default: '0', description: 'Minimum value' },
			{ name: 'max', type: 'number', default: '100', description: 'Maximum value' }
		],
		relatedComponents: ['Input'],
		showroomMode: 'settings'
	},
	{
		name: 'Spinner',
		slug: 'spinner',
		category: 'feedback',
		title: 'Svelte 5 Spinner – Loading Indicator',
		description: 'CSS-only loading spinner with industrial size variants.',
		useCase: 'Indicates loading state for async operations.',
		keywords: ['loading', 'spinner', 'feedback'],
		props: [
			{ name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Spinner size' }
		],
		relatedComponents: ['Skeleton'],
		showroomMode: 'feedback'
	},
	{
		name: 'Alert',
		slug: 'alert',
		category: 'feedback',
		title: 'Svelte 5 Alert – Contextual Feedback',
		description: 'Color-coded alert box for success, warning, or error messages.',
		useCase: 'Displaying critical system messages to the user.',
		keywords: ['feedback', 'message', 'alert'],
		props: [
			{ name: 'variant', type: "'default' | 'destructive' | 'warning' | 'success'", default: "'default'", description: 'Alert style' }
		],
		relatedComponents: ['Toast'],
		showroomMode: 'feedback'
	},
	{
		name: 'Skeleton',
		slug: 'skeleton',
		category: 'feedback',
		title: 'Svelte 5 Skeleton – Loading Placeholder',
		description: 'Pulse animation for content skeletons.',
		useCase: 'Reducing perceived latency during data fetching.',
		keywords: ['loading', 'placeholder', 'skeleton'],
		props: [
			{ name: 'class', type: 'string', description: 'Dimensions and margin' }
		],
		relatedComponents: ['Spinner'],
		showroomMode: 'feedback'
	},
	{
		name: 'Tabs',
		slug: 'tabs',
		category: 'layout',
		title: 'Svelte 5 Tabs – Tabbed Interface',
		description: 'Tabbed navigation for switching between views.',
		useCase: 'Organizing content into separate views without navigation.',
		keywords: ['navigation', 'tabs', 'layout'],
		props: [
			{ name: 'items', type: 'TabItem[]', description: 'Array of tab items' },
			{ name: 'defaultValue', type: 'string', description: 'Initially active tab' }
		],
		relatedComponents: ['Accordion'],
		showroomMode: 'layout'
	},
	{
		name: 'Accordion',
		slug: 'accordion',
		category: 'layout',
		title: 'Svelte 5 Accordion – Collapsible Sections',
		description: 'Vertical list of collapsible headers.',
		useCase: 'Managing vertically stacked content density.',
		keywords: ['layout', 'collapse', 'accordion'],
		props: [
			{ name: 'items', type: 'AccordionItem[]', description: 'Content items' },
			{ name: 'type', type: "'single' | 'multiple'", default: "'single'", description: 'Expansion mode' }
		],
		relatedComponents: ['Tabs'],
		showroomMode: 'layout'
	},
	{
		name: 'Modal',
		slug: 'modal',
		category: 'layout',
		title: 'Svelte 5 Modal – Dialog Overlay',
		description: 'Centered dialog overlay with backdrop blur.',
		useCase: 'Critical interruptions or complex sub-tasks.',
		keywords: ['overlay', 'dialog', 'modal'],
		props: [
			{ name: 'open', type: 'boolean', description: 'Visibility state' },
			{ name: 'onclose', type: '() => void', description: 'Close handler' }
		],
		relatedComponents: ['Drawer'],
		showroomMode: 'layout'
	},
	{
		name: 'Drawer',
		slug: 'drawer',
		category: 'layout',
		title: 'Svelte 5 Drawer – Side Sheet',
		description: 'Slide-in panel from left or right edge.',
		useCase: 'Secondary actions, filtering, or details views.',
		keywords: ['overlay', 'sidebar', 'drawer'],
		props: [
			{ name: 'open', type: 'boolean', description: 'Visibility state' },
			{ name: 'side', type: "'left' | 'right'", default: "'right'", description: 'Drawer position' }
		],
		relatedComponents: ['Modal'],
		showroomMode: 'layout'
	},
	{
		name: 'Menu',
		slug: 'menu',
		category: 'layout',
		title: 'Svelte 5 Menu – Dropdown Actions',
		description: 'Dropdown menu triggered by a button.',
		useCase: 'List of actions or navigation links.',
		keywords: ['navigation', 'dropdown', 'menu'],
		props: [
			{ name: 'items', type: 'MenuItem[]', description: 'Menu items' },
			{ name: 'trigger', type: 'Snippet', description: 'Trigger element' }
		],
		relatedComponents: ['Select'],
		showroomMode: 'layout'
	},
	{
		name: 'DatePicker',
		slug: 'date-picker',
		category: 'inputs',
		title: 'Svelte 5 DatePicker – Date Input',
		description: 'Styled native date input.',
		useCase: 'Date selection.',
		keywords: ['form', 'input', 'date'],
		props: [
			{ name: 'value', type: 'string', description: 'Date string YYYY-MM-DD' }
		],
		relatedComponents: ['Input'],
		showroomMode: 'settings'
	},
	{
		name: 'FileUpload',
		slug: 'file-upload',
		category: 'inputs',
		title: 'Svelte 5 FileUpload – File Input',
		description: 'Styled file input.',
		useCase: 'Uploading documents or images.',
		keywords: ['form', 'input', 'file'],
		props: [
			{ name: 'class', type: 'string', description: 'Styling classes' }
		],
		relatedComponents: ['Button'],
		showroomMode: 'settings'
	},
	{
		name: 'Stepper',
		slug: 'stepper',
		category: 'layout',
		title: 'Svelte 5 Stepper – Progress Indicator',
		description: 'Step progress visualization.',
		useCase: 'Showing progress in multi-step workflows.',
		keywords: ['progress', 'steps', 'workflow'],
		props: [
			{ name: 'steps', type: 'string[]', description: 'Step labels' },
			{ name: 'currentStep', type: 'number', description: 'Active step index' }
		],
		relatedComponents: ['Meter'],
		showroomMode: 'layout'
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
