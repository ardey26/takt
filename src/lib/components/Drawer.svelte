<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	interface Props {
		open?: boolean;
		onclose?: () => void;
		side?: 'left' | 'right';
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { open = false, onclose, side = 'right', children, class: className, ...rest }: Props = $props();

	const flyParams = {
		x: side === 'right' ? 300 : -300,
		duration: 300
	};
</script>

{#if open}
	<div 
		class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
		transition:fade={{ duration: 150 }}
		onclick={onclose}
		role="dialog"
		aria-modal="true"
	>
		<div
			class={cn(
				"absolute top-0 bottom-0 w-[300px] bg-surface border-x border-matte/10 p-6 shadow-xl",
				side === 'right' ? "right-0 border-l" : "left-0 border-r",
				className
			)}
			transition:fly={flyParams}
			onclick={(e) => e.stopPropagation()}
			{...rest}
		>
			{@render children?.()}
		</div>
	</div>
{/if}
