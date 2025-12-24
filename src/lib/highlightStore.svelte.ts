let highlightedComponent = $state<string | null>(null);

export function setHighlight(componentName: string | null) {
	highlightedComponent = componentName;
}

export function getHighlight(): string | null {
	return highlightedComponent;
}

export function isHighlighted(componentName: string): boolean {
	return highlightedComponent === componentName;
}
