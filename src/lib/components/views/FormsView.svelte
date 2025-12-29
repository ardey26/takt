<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import PartsList from '$lib/components/PartsList.svelte';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Radio from '$lib/components/Radio.svelte';
	import Slider from '$lib/components/Slider.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import DatePicker from '$lib/components/DatePicker.svelte';
	import FileUpload from '$lib/components/FileUpload.svelte';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Text from '$lib/components/Text.svelte';

	let checkboxA = $state(true);
	let checkboxB = $state(false);
	let radioGroup = $state('option1');
	let sliderValue = $state(50);
	let textAreaValue = $state('');
	let dateValue = $state('');
	let inputValue = $state('');
	let selectValue = $state('option1');
	let toggleValue = $state(true);

	const parts = [
		{ 
			id: 'checkbox', 
			name: 'Checkbox', 
			desc: 'Binary selection',
			importSnippet: `import Checkbox from '$lib/components/Checkbox.svelte';`,
			usageSnippet: `<Checkbox bind:checked={value} />`
		},
		{ 
			id: 'radio', 
			name: 'Radio', 
			desc: 'Exclusive selection',
			importSnippet: `import Radio from '$lib/components/Radio.svelte';`,
			usageSnippet: `<Radio bind:group={value} value="opt" />`
		},
		{ 
			id: 'slider', 
			name: 'Slider', 
			desc: 'Range input',
			importSnippet: `import Slider from '$lib/components/Slider.svelte';`,
			usageSnippet: `<Slider bind:value={val} min={0} max={100} />`
		},
		{ 
			id: 'textarea', 
			name: 'TextArea', 
			desc: 'Multi-line input',
			importSnippet: `import TextArea from '$lib/components/TextArea.svelte';`,
			usageSnippet: `<TextArea bind:value={text} rows={4} />`
		},
		{ 
			id: 'datepicker', 
			name: 'DatePicker', 
			desc: 'Date selection',
			importSnippet: `import DatePicker from '$lib/components/DatePicker.svelte';`,
			usageSnippet: `<DatePicker bind:value={date} />`
		},
		{ 
			id: 'fileupload', 
			name: 'FileUpload', 
			desc: 'File input',
			importSnippet: `import FileUpload from '$lib/components/FileUpload.svelte';`,
			usageSnippet: `<FileUpload />`
		},
	];
</script>

<section class="min-h-[50vh] chassis flex flex-col items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<Text variant="precise" as="p" class="text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 03
			</Text>
			<Heading level={1} class="text-2xl mb-2">
				Forms
			</Heading>
			<Text variant="muted" class="text-xs">
				Industrial-grade form controls
			</Text>
		</div>
	</Panel>
</section>

<Divider text="// Form Controls" />

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<div class="max-w-2xl mx-auto space-y-8">
			<div class="slot p-6 rounded-sm space-y-6">
				<Heading level={3} class="text-sm uppercase tracking-wider text-matte/60">Text Inputs</Heading>
				
				<div class="space-y-4">
					<div class="flex flex-col gap-2">
						<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Standard Input</Text>
						<Input bind:value={inputValue} placeholder="Enter value..." />
					</div>
					
					<div class="flex flex-col gap-2">
						<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Text Area</Text>
						<TextArea bind:value={textAreaValue} placeholder="Enter long text..." rows={3} />
					</div>
				</div>
			</div>

			<div class="slot p-6 rounded-sm space-y-6">
				<Heading level={3} class="text-sm uppercase tracking-wider text-matte/60">Selection Controls</Heading>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Checkboxes</Text>
						<div class="flex flex-col gap-3">
							<label class="flex items-center gap-3 cursor-pointer">
								<Checkbox bind:checked={checkboxA} />
								<Text variant="body" as="span" class="text-xs">Enable feature A</Text>
							</label>
							<label class="flex items-center gap-3 cursor-pointer">
								<Checkbox bind:checked={checkboxB} />
								<Text variant="body" as="span" class="text-xs">Enable feature B</Text>
							</label>
						</div>
					</div>
					
					<div class="space-y-4">
						<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Radio Group</Text>
						<div class="flex flex-col gap-3">
							<label class="flex items-center gap-3 cursor-pointer">
								<Radio bind:group={radioGroup} value="option1" />
								<Text variant="body" as="span" class="text-xs">Option One</Text>
							</label>
							<label class="flex items-center gap-3 cursor-pointer">
								<Radio bind:group={radioGroup} value="option2" />
								<Text variant="body" as="span" class="text-xs">Option Two</Text>
							</label>
							<label class="flex items-center gap-3 cursor-pointer">
								<Radio bind:group={radioGroup} value="option3" />
								<Text variant="body" as="span" class="text-xs">Option Three</Text>
							</label>
						</div>
					</div>
				</div>

				<div class="space-y-4">
					<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Toggle</Text>
					<Toggle bind:checked={toggleValue} label="Active" />
				</div>

				<div class="space-y-4">
					<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Select</Text>
					<Select bind:value={selectValue} options={['option1', 'option2', 'option3']} />
				</div>
			</div>

			<div class="slot p-6 rounded-sm space-y-6">
				<Heading level={3} class="text-sm uppercase tracking-wider text-matte/60">Range & Specialized</Heading>
				
				<div class="space-y-6">
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Slider</Text>
							<Text variant="signal" as="span" class="text-xs tabular-nums">{sliderValue}%</Text>
						</div>
						<Slider bind:value={sliderValue} min={0} max={100} />
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div class="space-y-2">
							<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">Date Picker</Text>
							<DatePicker bind:value={dateValue} />
						</div>
						
						<div class="space-y-2">
							<Text variant="precise" as="label" class="text-[10px] uppercase tracking-wider text-matte/60">File Upload</Text>
							<FileUpload />
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-end">
				<Button label="Submit" onclick={() => alert('Form submitted!')} />
			</div>
		</div>
	</main>

	<div class="hidden lg:block sticky top-0 h-screen">
		<PartsList {parts} showroomNumber="03" showroomName="Forms" class="h-full overflow-y-auto" />
	</div>
</section>
