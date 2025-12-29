<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	
	interface AccordionItem {
		value: string;
		trigger: string;
		content: Snippet;
	}

	interface Props {
		items: AccordionItem[];
		type?: 'single' | 'multiple';
		class?: string;
		[key: string]: any;
	}

	let { items, type = 'single', class: className, ...rest }: Props = $props();
	let openValues = $state<string[]>([]); // simplified for now

	function toggle(value: string) {
		if (openValues.includes(value)) {
			openValues = openValues.filter(v => v !== value);
		} else {
			if (type === 'single') {
				openValues = [value];
			} else {
				openValues = [...openValues, value];
			}
		}
	}
</script>

<div class={cn("w-full divide-y divide-matte/10 border-t border-b border-matte/10", className)} {...rest}>
	{#each items as item}
		<div class="group">
			<button
				class="flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:text-signal"
				onclick={() => toggle(item.value)}
			>
				{item.trigger}
				<span class={cn("transition-transform duration-200", openValues.includes(item.value) ? "rotate-180" : "")}>
					↓
				</span>
			</button>
			{#if openValues.includes(item.value)}
				<div class="pb-4 pt-0 text-sm" transition:slide>
					{@render item.content()}
				</div>
			{/if}
		</div>
	{/each}
</div>
