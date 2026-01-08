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
	import Stack from '$lib/components/Stack.svelte';
	import Grid from '$lib/components/Grid.svelte';

	let checkboxA = $state(true);
	let checkboxB = $state(false);
	let radioGroup = $state('option1');
	let sliderValue = $state(50);
	let textAreaValue = $state('');
	let dateValue = $state('');
	let inputValue = $state('')
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

<section class="min-h-[50vh] bg-[#F4F4F0] flex flex-col items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<p class="font-mono text-[10px] tracking-[0.3em] text-[#111111]/40 uppercase mb-1">
				Showroom 03
			</p>
			<h1 class="font-mono text-2xl font-bold tracking-tight text-[#111111] mb-2">
				Forms
			</h1>
			<p class="font-mono text-xs text-[#111111]/50">
				Industrial-grade form controls
			</p>
		</div>
	</Panel>
</section>

<Divider text="// Form Controls" />

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 bg-[#F4F4F0] p-4 sm:p-6">
		<div class="max-w-2xl mx-auto">
			<Stack gap={8}>
				<div class="bg-[#E8E8E4] shadow-inner p-6 rounded-sm">
					<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider mb-4">Text Inputs</p>
					<Stack gap={4}>
						<Stack gap={2}>
							<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Standard Input</p>
							<Input bind:value={inputValue} placeholder="Enter value..." />
						</Stack>
						<Stack gap={2}>
							<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Text Area</p>
							<TextArea bind:value={textAreaValue} placeholder="Enter long text..." rows={3} />
						</Stack>
					</Stack>
				</div>

				<div class="bg-[#E8E8E4] shadow-inner p-6 rounded-sm">
					<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider mb-4">Selection Controls</p>
					<Grid cols={2} gap={6} class="mb-6">
						<Stack gap={4}>
							<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Checkboxes</p>
							<Stack gap={3}>
								<label class="flex items-center gap-3 cursor-pointer">
									<Checkbox bind:checked={checkboxA} />
									<span class="font-mono text-xs text-[#111111]">Enable feature A</span>
								</label>
								<label class="flex items-center gap-3 cursor-pointer">
									<Checkbox bind:checked={checkboxB} />
									<span class="font-mono text-xs text-[#111111]">Enable feature B</span>
								</label>
							</Stack>
						</Stack>
						
						<Stack gap={4}>
							<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Radio Group</p>
							<Stack gap={3}>
								<label class="flex items-center gap-3 cursor-pointer">
									<Radio bind:group={radioGroup} value="option1" />
									<span class="font-mono text-xs text-[#111111]">Option One</span>
								</label>
								<label class="flex items-center gap-3 cursor-pointer">
									<Radio bind:group={radioGroup} value="option2" />
									<span class="font-mono text-xs text-[#111111]">Option Two</span>
								</label>
								<label class="flex items-center gap-3 cursor-pointer">
									<Radio bind:group={radioGroup} value="option3" />
									<span class="font-mono text-xs text-[#111111]">Option Three</span>
								</label>
							</Stack>
						</Stack>
					</Grid>

					<Stack gap={4} class="mb-6">
						<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Toggle</p>
						<Toggle bind:checked={toggleValue} label="Active" />
					</Stack>

					<Stack gap={4}>
						<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Select</p>
						<Select bind:value={selectValue} options={['option1', 'option2', 'option3']} />
					</Stack>
				</div>

				<div class="bg-[#E8E8E4] shadow-inner p-6 rounded-sm">
					<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider mb-4">Range & Specialized</p>
					<Stack gap={6}>
						<Stack gap={3}>
							<div class="flex items-center justify-between">
								<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Slider</p>
								<span class="font-mono text-xs text-[#EE6600] tabular-nums">{sliderValue}%</span>
							</div>
							<Slider bind:value={sliderValue} min={0} max={100} />
						</Stack>
						
						<Grid cols={2} gap={6}>
							<Stack gap={2}>
								<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">Date Picker</p>
								<DatePicker bind:value={dateValue} />
							</Stack>
							
							<Stack gap={2}>
								<p class="font-mono text-[10px] text-[#111111]/40 uppercase tracking-wider">File Upload</p>
								<FileUpload />
							</Stack>
						</Grid>
					</Stack>
				</div>

				<div class="flex justify-end">
					<Button label="Submit" onclick={() => alert('Form submitted!')} />
				</div>
			</Stack>
		</div>
	</main>

	<div class="absolute md:block hidden h-screen right-0">
		<PartsList {parts} showroomNumber="03" showroomName="Forms" class="h-full overflow-y-auto" />
	</div>
</section>
