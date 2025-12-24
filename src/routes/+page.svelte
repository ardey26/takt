<script lang="ts">
	import ShowcaseLayout from '$lib/components/ShowcaseLayout.svelte';
	import LogisticsView from '$lib/components/views/LogisticsView.svelte';
	import SettingsView from '$lib/components/views/SettingsView.svelte';
	import LedgerView from '$lib/components/views/LedgerView.svelte';
	import DevOpsView from '$lib/components/views/DevOpsView.svelte';
</script>

<ShowcaseLayout>
	{#snippet logistics()}
		<LogisticsView />
	{/snippet}
	{#snippet settings()}
		<SettingsView />
	{/snippet}
	{#snippet ledger()}
		<LedgerView />
	{/snippet}
	{#snippet devops()}
		<DevOpsView />
	{/snippet}
</ShowcaseLayout>
