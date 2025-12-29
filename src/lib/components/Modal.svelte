<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	
	interface Props {
		open?: boolean;
		onclose?: () => void;
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { open = false, onclose, children, class: className, ...rest }: Props = $props();
</script>

{#if open}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		transition:fade={{ duration: 150 }}
		onclick={onclose}
		role="dialog"
		aria-modal="true"
	>
		<div
			class={cn(
				"relative w-full max-w-lg rounded-lg border border-matte/10 bg-surface p-6 shadow-lg",
				className
			)}
			transition:scale={{ start: 0.95, duration: 150 }}
			onclick={(e) => e.stopPropagation()}
			{...rest}
		>
			{@render children?.()}
		</div>
	</div>
{/if}
