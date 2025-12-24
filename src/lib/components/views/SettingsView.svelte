<script lang="ts">
	import Panel from '$lib/components/Panel.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import PartsList from '$lib/components/PartsList.svelte';

	import { isHighlighted } from '$lib/highlightStore.svelte';

	let darkMode = $state(false);
	let notifications = $state(true);
	let compactView = $state(false);
	let autoSync = $state(true);

	const parts = [
		{ 
			id: 'toggle', 
			name: 'Toggle', 
			desc: 'On/off switch',
			importSnippet: `import Toggle from '$lib/components/Toggle.svelte';`,
			usageSnippet: `<Toggle bind:checked={value} />`
		},
		{ 
			id: 'panel', 
			name: 'Panel', 
			desc: 'Content container',
			importSnippet: `import Panel from '$lib/components/Panel.svelte';`,
			usageSnippet: `<Panel>Content here</Panel>`
		},

	];
</script>

<section class="min-h-[50vh] chassis flex flex-col items-center justify-center px-4 py-12">
	<Panel class="mb-8 max-w-md w-full">
		<div class="p-6 text-center">
			<p class="font-mono text-[10px] tracking-[0.3em] text-matte/40 uppercase mb-1">
				Showroom 03
			</p>
			<h1 class="font-mono text-2xl font-bold tracking-tight text-matte mb-2">
				Switchboard
			</h1>
			<p class="font-mono text-xs text-matte/50">
				System configuration & preferences
			</p>
		</div>
	</Panel>
</section>

<Divider text="// Preferences" />

<section class="min-h-screen flex flex-col lg:flex-row">
	<main class="flex-1 chassis p-4 sm:p-6">
		<div class="max-w-md mx-auto space-y-4 transition-all duration-200 {isHighlighted('toggle') ? 'ring-2 ring-signal ring-offset-2 rounded-sm' : ''}">
			<div class="flex items-center justify-between p-4 bg-bone/50 border border-stone-300 rounded-sm">
				<div>
					<p class="font-mono text-xs font-medium text-matte">Dark Mode</p>
					<p class="font-mono text-[10px] text-matte/50">Enable dark interface theme</p>
				</div>
				<Toggle bind:checked={darkMode} />
			</div>

			<div class="flex items-center justify-between p-4 bg-bone/50 border border-stone-300 rounded-sm">
				<div>
					<p class="font-mono text-xs font-medium text-matte">Notifications</p>
					<p class="font-mono text-[10px] text-matte/50">Receive system alerts</p>
				</div>
				<Toggle bind:checked={notifications} />
			</div>

			<div class="flex items-center justify-between p-4 bg-bone/50 border border-stone-300 rounded-sm">
				<div>
					<p class="font-mono text-xs font-medium text-matte">Compact View</p>
					<p class="font-mono text-[10px] text-matte/50">Reduce spacing in tables</p>
				</div>
				<Toggle bind:checked={compactView} />
			</div>

			<div class="flex items-center justify-between p-4 bg-bone/50 border border-stone-300 rounded-sm">
				<div>
					<p class="font-mono text-xs font-medium text-matte">Auto Sync</p>
					<p class="font-mono text-[10px] text-matte/50">Sync data automatically</p>
				</div>
				<Toggle bind:checked={autoSync} />
			</div>
		</div>
	</main>

	<div class="absolute h-screen right-0">
		<PartsList {parts} showroomNumber="03" showroomName="Settings" class="h-full overflow-y-auto" />
	</div>
</section>
