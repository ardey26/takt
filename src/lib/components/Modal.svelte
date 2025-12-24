<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	
	export interface ModalProps {
		open?: boolean;
		title?: string;
		class?: string;
		children: Snippet;
		onclose?: () => void;
	}
	
	let { 
		open = $bindable(false), 
		title = '',
		class: className,
		children,
		onclose
	}: ModalProps = $props();
	
	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
	
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			close();
		}
	}
	
	function close() {
		open = false;
		onclose?.();
	}
</script>

<svelte:window onkeydown={open ? handleKeydown : undefined} />

{#if open}
	<div 
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby={title ? "modal-title" : undefined}
		tabindex={-1}
	>
		<div class="fixed inset-0 bg-matte/40 backdrop-blur-sm"></div>
		
		<div 
			class={cn(
				"relative z-10 w-full max-w-md",
				"bg-bone border border-stone-300 rounded-sm shadow-modal",
				className
			)}
		>
			{#if title}
				<header class="px-5 pt-4 pb-3 border-b border-stone-200">
					<h2 
						id="modal-title"
						class="font-mono text-xs font-bold tracking-[0.15em] text-matte uppercase"
					>
						{title}
					</h2>
				</header>
			{/if}
			
			<div class="p-5">
				{@render children()}
			</div>
			
			<button
				onclick={close}
				class={cn(
					"absolute top-3 right-3 w-7 h-7 rounded-sm",
					"flex items-center justify-center",
					"text-matte/40 hover:text-matte hover:bg-slot",
					"transition-colors duration-100 cursor-pointer"
				)}
				aria-label="Close modal"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>
{/if}
