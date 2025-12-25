export interface UseCase {
	industry: 'logistics' | 'fintech' | 'devops' | 'general';
	title: string;
	description: string;
	features: string[];
}

export const useCases: Record<string, UseCase[]> = {
	datatable: [
		{
			industry: 'logistics',
			title: 'Warehouse Inventory Management',
			description: 'Track thousands of SKUs with real-time stock levels, automated reorder alerts, and batch selection for bulk operations. The DataTable handles 10,000+ rows with virtualized scrolling.',
			features: [
				'Multi-row selection for bulk actions',
				'Inline stock level meters for instant visual feedback',
				'Status tags for inventory state (in-stock, low-stock, out-of-stock)',
				'Keyboard navigation for power users'
			]
		},
		{
			industry: 'fintech',
			title: 'Portfolio Holdings Overview',
			description: 'Display investment portfolios with sortable columns, performance metrics, and real-time price updates. Optimized for high-frequency data with minimal re-renders.',
			features: [
				'Tabular numerics for stable column widths during updates',
				'Color-coded gain/loss indicators',
				'Sortable columns with preserved selection state',
				'Export functionality for compliance reporting'
			]
		}
	],
	ticker: [
		{
			industry: 'fintech',
			title: 'Real-Time Market Data Display',
			description: 'Display live market prices with sub-second update latency. The Ticker component uses Svelte 5 fine-grained reactivity to update only the changed values, achieving 60+ FPS even with dozens of tickers.',
			features: [
				'Tabular numerics prevent layout shift during rapid updates',
				'Configurable decimal precision for different asset classes',
				'Positive/negative change indicators with color coding',
				'Animates smoothly during value transitions'
			]
		},
		{
			industry: 'devops',
			title: 'System Metrics Dashboard',
			description: 'Monitor CPU usage, memory consumption, and request latency with real-time tickers. Perfect for NOC dashboards and on-call engineers.',
			features: [
				'Percentage suffix for capacity metrics',
				'Threshold-based color changes (normal → warning → critical)',
				'Compact layout for high-density metric grids',
				'WebSocket-ready with optimistic updates'
			]
		}
	],
	meter: [
		{
			industry: 'logistics',
			title: 'Stock Level Visualization',
			description: 'Display stock levels with the signature LED-style segments inspired by Braun audio equipment. Instantly see capacity at a glance.',
			features: [
				'10-segment LED display for 10% granularity',
				'Heat variant for critical thresholds',
				'Subtle jitter animation adds authenticity',
				'Compact mode for inline table display'
			]
		},
		{
			industry: 'devops',
			title: 'Server Health Indicators',
			description: 'Monitor server capacity and resource utilization. The Meter provides instant visual feedback without requiring users to read numbers.',
			features: [
				'Normal (green) and heat (red) variants',
				'Works at any scale from full panel to table cell',
				'Accessible with screen reader support',
				'Zero-dependency, pure CSS animation'
			]
		}
	],
	toggle: [
		{
			industry: 'logistics',
			title: 'System Control Panel',
			description: 'Control system settings with physical-feeling toggle switches. The tactile design provides clear on/off state visibility from across the room.',
			features: [
				'High-contrast ON/OFF indicators',
				'ARIA role="switch" for accessibility',
				'Keyboard accessible with Enter/Space toggle',
				'Satisfying click animation on interaction'
			]
		},
		{
			industry: 'devops',
			title: 'Feature Flag Controls',
			description: 'Enable/disable features in real-time with immediate visual feedback. The industrial styling makes critical toggles unmistakable.',
			features: [
				'Clear label positioning for safety-critical controls',
				'Bindable state integrates with any state management',
				'Focus ring for keyboard navigation',
				'Optimistic UI updates with rollback support'
			]
		}
	],
	button: [
		{
			industry: 'general',
			title: 'Primary Action Trigger',
			description: 'Inspired by the iconic Braun ET66 calculator, this button demands attention for primary actions. The gradient shading creates physical depth.',
			features: [
				'Signal orange color for maximum visibility',
				'Press animation provides tactile feedback',
				'Gradient shading creates 3D depth effect',
				'Focus ring for accessibility compliance'
			]
		}
	],
	pagination: [
		{
			industry: 'logistics',
			title: 'Large Dataset Navigation',
			description: 'Navigate large inventories with smart ellipsis handling. The pagination scales from 5 to 500+ pages while keeping the UI compact.',
			features: [
				'First/last page quick navigation',
				'Smart ellipsis for middle page ranges',
				'Configurable sibling count',
				'All buttons ARIA-labeled for screen readers'
			]
		}
	],
	toolbar: [
		{
			industry: 'logistics',
			title: 'Inventory Control Strip',
			description: 'A unified control bar combining search, filter, and action buttons. Reduces visual noise while maximizing functionality.',
			features: [
				'Integrated search with icon',
				'Category dropdown filter',
				'Primary action button',
				'Responsive stacking on mobile'
			]
		}
	],
	panel: [
		{
			industry: 'general',
			title: 'Content Grouping',
			description: 'Group related content with a consistent labeled container. The inner shadow creates the recessed look characteristic of high-end industrial equipment.',
			features: [
				'Consistent label styling across the system',
				'Svelte 5 snippet support for flexible content',
				'Inner shadow creates depth',
				'Works with any child components'
			]
		}
	]
};

export function getUseCases(componentSlug: string): UseCase[] {
	return useCases[componentSlug] || [];
}


export function getPrimaryUseCase(componentSlug: string): UseCase | undefined {
	const cases = useCases[componentSlug];
	return cases?.[0];
}

export function getUseCasesByIndustry(industry: UseCase['industry']): { component: string; useCase: UseCase }[] {
	const result: { component: string; useCase: UseCase }[] = [];
	
	for (const [component, cases] of Object.entries(useCases)) {
		for (const useCase of cases) {
			if (useCase.industry === industry) {
				result.push({ component, useCase });
			}
		}
	}
	
	return result;
}
