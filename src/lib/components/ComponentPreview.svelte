<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import Button from './Button.svelte';
	import Meter from './Meter.svelte';
	import Toggle from './Toggle.svelte';
	import Tag from './Tag.svelte';
	import Ticker from './Ticker.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
	import Pagination from './Pagination.svelte';
	import Panel from './Panel.svelte';
	import Avatar from './Avatar.svelte';
	import Plot from './Plot.svelte';
	import PeriodSelector from './PeriodSelector.svelte';
	
	export interface ComponentPreviewProps {
		slug: string;
		name: string;
		class?: string;
	}
	
	let { slug, name, class: className }: ComponentPreviewProps = $props();
	let toggleState = $state(true);
	let pageState = $state(2);
	let selectState = $state('all');
</script>

{#snippet button()}<Button label="OK" class="scale-90 pointer-events-none" />{/snippet}
{#snippet meter()}<Meter value={65} compact />{/snippet}
{#snippet toggle()}<Toggle checked={toggleState} class="pointer-events-none" />{/snippet}
{#snippet tag()}<Tag variant="in-stock" label="Ready" />{/snippet}
{#snippet ticker()}<Ticker value={2847.50} prefix="$" change={2.3} class="scale-75 p-0 [&>div]:shadow-none" />{/snippet}
{#snippet panel()}<Panel class="scale-90"><span class="font-mono text-[10px] text-matte/50">Content</span></Panel>{/snippet}
{#snippet input()}<Input placeholder="Search..." icon="search" class="max-w-24 pointer-events-none [&>input]:h-7 [&>input]:text-[10px]" />{/snippet}
{#snippet select()}<Select value={selectState} options={['all', 'new']} class="scale-90 pointer-events-none" />{/snippet}
{#snippet pagination()}<Pagination currentPage={pageState} totalPages={5} class="scale-75 pointer-events-none" />{/snippet}
{#snippet divider()}<div class="w-full border-t border-stone-300"></div>{/snippet}
{#snippet avatar()}<Avatar initials="AB" />{/snippet}
{#snippet toolbar()}<div class="flex gap-px w-full"><div class="flex-1 bg-stone-200 h-5 rounded-l-sm"></div><div class="w-8 bg-signal h-5 rounded-r-sm"></div></div>{/snippet}
{#snippet datatable()}<div class="w-full border border-stone-300 rounded-sm overflow-hidden"><div class="grid grid-cols-4 gap-px bg-stone-300 text-[8px]"><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">☑</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">SKU</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">Stock</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">Status</div><div class="bg-bone px-1 py-0.5 font-mono text-matte/40">☐</div><div class="bg-bone px-1 py-0.5 font-mono text-matte/60">A-01</div><div class="bg-bone px-1 py-0.5"><Meter value={72} compact class="scale-50 origin-left" /></div><div class="bg-bone px-1 py-0.5"><span class="text-[6px] text-green-700">●</span></div></div></div>{/snippet}
{#snippet plot()}<Plot data={[{value:1}, {value:3}, {value:2}, {value:4}, {value:3}, {value:5}]} type="step" height={40} class="w-full p-2 scale-75" />{/snippet}
{#snippet periodSelector()}<PeriodSelector options={['1D', '1W']} class="scale-75 origin-center pointer-events-none" />{/snippet}
{#snippet fallback()}<span class="font-mono text-[10px] text-matte/30">{name}</span>{/snippet}

<div class={cn("flex items-center justify-center min-h-16 pointer-events-none", className)}>
	{#if slug === 'button'}{@render button()}
	{:else if slug === 'meter'}{@render meter()}
	{:else if slug === 'toggle'}{@render toggle()}
	{:else if slug === 'tag'}{@render tag()}
	{:else if slug === 'ticker'}{@render ticker()}
	{:else if slug === 'panel'}{@render panel()}
	{:else if slug === 'input'}{@render input()}
	{:else if slug === 'select'}{@render select()}
	{:else if slug === 'pagination'}{@render pagination()}
	{:else if slug === 'divider'}{@render divider()}
	{:else if slug === 'avatar'}{@render avatar()}
	{:else if slug === 'toolbar'}{@render toolbar()}
	{:else if slug === 'datatable'}{@render datatable()}
	{:else if slug === 'plot'}{@render plot()}
	{:else if slug === 'period-selector'}{@render periodSelector()}
	{:else}{@render fallback()}
	{/if}
</div>
