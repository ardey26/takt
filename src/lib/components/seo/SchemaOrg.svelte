<script lang="ts">
	interface Props {
		schema: object | object[];
	}
	
	let { schema }: Props = $props();
	
	// Handle both single schema and array of schemas
	let schemas = $derived(Array.isArray(schema) ? schema : [schema]);
</script>

<svelte:head>
	{#each schemas as s}
		{@html `<script type="application/ld+json">${JSON.stringify(s)}</script>`}
	{/each}
</svelte:head>
