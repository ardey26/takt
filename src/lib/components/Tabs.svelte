<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
	interface TabItem {
		value: string;
		label: string;
		content: Snippet;
	}

	interface Props {
		items: TabItem[];
		defaultValue?: string;
		class?: string;
		[key: string]: any;
	}

	let { items, defaultValue, class: className, ...rest }: Props = $props();
	let activeValue = $state(defaultValue || items[0]?.value);
</script>

<div class={cn("w-full", className)} {...rest}>
	<div class="flex border-b border-matte/20 mb-4">
		{#each items as item}
			<button
				class={cn(
					"px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[2px]",
					activeValue === item.value
						? "border-signal text-signal"
						: "border-transparent text-matte hover:text-signal/80"
				)}
				onclick={() => activeValue = item.value}
			>
				{item.label}
			</button>
		{/each}
	</div>
	{#each items as item}
		{#if activeValue === item.value}
			<div role="tabpanel">
				{@render item.content()}
			</div>
		{/if}
	{/each}
</div>
