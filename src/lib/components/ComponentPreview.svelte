<script lang="ts">
	import { cn } from '$lib/utils';
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
	import Heading from './Heading.svelte';
	import Text from './Text.svelte';
	import Link from './Link.svelte';
	import Box from './Box.svelte';
	import Stack from './Stack.svelte';
	import Grid from './Grid.svelte';
	import Checkbox from './Checkbox.svelte';
	import Radio from './Radio.svelte';
	import TextArea from './TextArea.svelte';
	import Slider from './Slider.svelte';
	import Spinner from './Spinner.svelte';
	import Alert from './Alert.svelte';
	import Skeleton from './Skeleton.svelte';
	import Tabs from './Tabs.svelte';
	import Accordion from './Accordion.svelte';
	import DatePicker from './DatePicker.svelte';
	import FileUpload from './FileUpload.svelte';
	import Stepper from './Stepper.svelte';

	interface ComponentPreviewProps {
		slug: string;
		name: string;
		class?: string;
	}

	let { slug, name, class: className }: ComponentPreviewProps = $props();
	let toggleState = $state(true);
	let pageState = $state(2);
	let selectState = $state('all');
	let radioGroup = $state('1');
</script>

{#snippet button()}<Button label="OK" class="scale-90 pointer-events-none" />{/snippet}
{#snippet meter()}<Meter value={65} compact />{/snippet}
{#snippet toggle()}<Toggle checked={toggleState} class="pointer-events-none" />{/snippet}
{#snippet tag()}<Tag variant="in-stock" label="Ready" />{/snippet}
{#snippet ticker()}<Ticker value={2847.50} prefix="$" change={2.3} class="scale-75 p-0 [&>div]:shadow-none" />{/snippet}
{#snippet panel()}<Panel class="scale-90"><span class="font-mono text-[10px] text-matte/50">Content</span></Panel>{/snippet}
{#snippet input()}<Input placeholder="Search..." icon="search" class="max-w-24 pointer-events-none [&>input]:h-7 [&>input]:text-[10px]" />{/snippet}
{#snippet select()}<Select value={selectState} options={['all', 'new']} class="scale-90 pointer-events-none" />{/snippet}
{#snippet pagination()}<div class="overflow-hidden w-full flex justify-center"><Pagination currentPage={pageState} totalPages={3} class="scale-50 origin-center pointer-events-none" /></div>{/snippet}
{#snippet divider()}<div class="w-full border-t border-stone-300"></div>{/snippet}
{#snippet avatar()}<Avatar initials="AB" />{/snippet}
{#snippet toolbar()}<div class="flex gap-px w-full"><div class="flex-1 bg-stone-200 h-5 rounded-l-sm"></div><div class="w-8 bg-signal h-5 rounded-r-sm"></div></div>{/snippet}
{#snippet datatable()}<div class="w-full border border-stone-300 rounded-sm overflow-hidden"><div class="grid grid-cols-4 gap-px bg-stone-300 text-[8px]"><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">☑</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">SKU</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">Stock</div><div class="bg-[#E6E6E2] px-1 py-0.5 font-mono text-matte/50">Status</div><div class="bg-bone px-1 py-0.5 font-mono text-matte/40">☐</div><div class="bg-bone px-1 py-0.5 font-mono text-matte/60">A-01</div><div class="bg-bone px-1 py-0.5"><Meter value={72} compact class="scale-50 origin-left" /></div><div class="bg-bone px-1 py-0.5"><span class="text-[6px] text-green-700">●</span></div></div></div>{/snippet}
{#snippet plot()}<Plot data={[{value:1}, {value:3}, {value:2}, {value:4}, {value:3}, {value:5}]} type="step" height={40} class="w-full p-2 scale-75" />{/snippet}
{#snippet periodSelector()}<PeriodSelector options={['1D', '1W']} class="scale-75 origin-center pointer-events-none" />{/snippet}

{#snippet heading()}<Heading level="h4">Heading</Heading>{/snippet}
{#snippet text()}<Text variant="muted" class="text-xs">Precision text</Text>{/snippet}
{#snippet link()}<Link href="#">Link</Link>{/snippet}
{#snippet box()}<Box class="w-8 h-8 bg-matte/20 rounded-md"></Box>{/snippet}
{#snippet stack()}<Stack gap={1}><div class="w-8 h-2 bg-matte/20"></div><div class="w-6 h-2 bg-matte/20"></div></Stack>{/snippet}
{#snippet grid()}<Grid cols={2} gap={1}><div class="w-4 h-4 bg-matte/20"></div><div class="w-4 h-4 bg-matte/20"></div></Grid>{/snippet}
{#snippet checkbox()}<Checkbox checked disabled class="pointer-events-none" />{/snippet}
{#snippet radio()}<Radio value="1" bind:group={radioGroup} class="pointer-events-none" />{/snippet}
{#snippet textarea()}<TextArea value="Text..." rows={2} class="w-24 text-[10px] pointer-events-none" />{/snippet}
{#snippet slider()}<Slider value={40} class="w-24 pointer-events-none" />{/snippet}
{#snippet spinner()}<Spinner size="sm" />{/snippet}
{#snippet alert()}<Alert variant="warning" class="p-2 text-[10px] w-32">Alert</Alert>{/snippet}
{#snippet skeleton()}<Skeleton class="w-24 h-4" />{/snippet}
{#snippet tabContent()}Content{/snippet}
{#snippet tabs()}<Tabs items={[{ value: '1', label: 'Tab', content: tabContent }]} class="scale-75 w-32 pointer-events-none" />{/snippet}
{#snippet accordion()}<Accordion items={[{ value: '1', trigger: 'Section', content: tabContent }]} class="scale-75 w-32 pointer-events-none" />{/snippet}
{#snippet modal()}<div class="p-4 border border-matte/20 rounded-md bg-bone shadow-md"><span class="text-xs font-mono">Modal</span></div>{/snippet}
{#snippet drawer()}<div class="h-12 w-16 border-l border-matte/20 p-2 bg-bone"><span class="text-xs font-mono">Drawer</span></div>{/snippet}
{#snippet menu()}<Button label="Menu" class="scale-75 pointer-events-none" />{/snippet}
{#snippet datePicker()}<DatePicker class="scale-75 w-32 pointer-events-none" />{/snippet}
{#snippet fileUpload()}<FileUpload class="scale-75 w-32 pointer-events-none" />{/snippet}
{#snippet stepper()}<Stepper steps={['1', '2']} currentStep={0} class="scale-75 pointer-events-none" />{/snippet}
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
	{:else if slug === 'heading'}{@render heading()}
	{:else if slug === 'text'}{@render text()}
	{:else if slug === 'link'}{@render link()}
	{:else if slug === 'box'}{@render box()}
	{:else if slug === 'stack'}{@render stack()}
	{:else if slug === 'grid'}{@render grid()}
	{:else if slug === 'checkbox'}{@render checkbox()}
	{:else if slug === 'radio'}{@render radio()}
	{:else if slug === 'textarea'}{@render textarea()}
	{:else if slug === 'slider'}{@render slider()}
	{:else if slug === 'spinner'}{@render spinner()}
	{:else if slug === 'alert'}{@render alert()}
	{:else if slug === 'skeleton'}{@render skeleton()}
	{:else if slug === 'tabs'}{@render tabs()}
	{:else if slug === 'accordion'}{@render accordion()}
	{:else if slug === 'modal'}{@render modal()}
	{:else if slug === 'drawer'}{@render drawer()}
	{:else if slug === 'menu'}{@render menu()}
	{:else if slug === 'date-picker'}{@render datePicker()}
	{:else if slug === 'file-upload'}{@render fileUpload()}
	{:else if slug === 'stepper'}{@render stepper()}
	{:else}{@render fallback()}
	{/if}
</div>
