<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	
	interface MenuItem {
		label: string;
		action: () => void;
	}

	interface Props {
		items?: MenuItem[];
		trigger: Snippet;
		open?: boolean;
		class?: string;
		[key: string]: any;
	}

	let { items = [], trigger, open = false, class: className, ...rest }: Props = $props();
	let isOpen = $state(open);

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class={cn("relative inline-block text-left", className)} {...rest}>
	<div onclick={toggle} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && toggle()}>
		{@render trigger()}
	</div>

	{#if isOpen}
		<div 
			class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-matte/10 bg-surface shadow-lg focus:outline-hidden"
			transition:slide={{ duration: 100 }}
		>
			<div class="py-1">
				{#each items as item}
					<button
						class="block w-full px-4 py-2 text-left text-sm text-matte hover:bg-matte/5 hover:text-signal"
						onclick={() => { item.action(); isOpen = false; }}
					>
						{item.label}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
