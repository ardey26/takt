// Takt Component Library
// High-end Svelte components inspired by Dieter Rams

// Components
export { default as Button } from './components/Button.svelte';
export { default as Meter } from './components/Meter.svelte';
export { default as Toggle } from './components/Toggle.svelte';
export { default as Panel } from './components/Panel.svelte';
export { default as Tag } from './components/Tag.svelte';
export { default as Toolbar } from './components/Toolbar.svelte';
export { default as DataTable } from './components/DataTable.svelte';
export { default as Pagination } from './components/Pagination.svelte';
export { default as PartsList } from './components/PartsList.svelte';
export { default as Avatar } from './components/Avatar.svelte';

// Types (re-exported from components)
export type { ButtonProps } from './components/Button.svelte';
export type { MeterProps } from './components/Meter.svelte';
export type { ToggleProps } from './components/Toggle.svelte';
export type { PanelProps } from './components/Panel.svelte';
export type { TagProps } from './components/Tag.svelte';
export type { ToolbarProps } from './components/Toolbar.svelte';
export type { DataTableProps, DataTableItem } from './components/DataTable.svelte';
export type { PaginationProps } from './components/Pagination.svelte';

// Utilities
export { cn } from './utils';
