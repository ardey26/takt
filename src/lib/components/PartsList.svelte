<script lang="ts">
	import { cn } from '$lib/utils';
	import { setHighlight, isHighlighted } from '$lib/highlightStore.svelte';

	export interface Part {
		id: string;
		name: string;
		desc: string;
		importSnippet: string;
		usageSnippet: string;
		children?: string[];
	}

	export interface PartsListProps {
		parts: Part[];
		showroomNumber?: string;
		showroomName?: string;
		fullPageTemplate?: string;
		class?: string;
	}

	let { 
		parts,
		showroomNumber = '01',
		showroomName = 'Logistics',
		fullPageTemplate = '',
		class: className 
	}: PartsListProps = $props();

	let copiedId = $state<string | null>(null);
	let copiedAll = $state(false);

	async function copyComponent(part: Part) {
		const code = `${part.importSnippet}\n\n${part.usageSnippet}`;
		await navigator.clipboard.writeText(code);
		copiedId = part.id;
		setTimeout(() => copiedId = null, 1500);
	}

	async function copyAll() {
		if (!fullPageTemplate) return;
		await navigator.clipboard.writeText(fullPageTemplate);
		copiedAll = true;
		setTimeout(() => copiedAll = false, 2000);
	}
</script>

<aside class={cn("w-64 bg-[#EBEBE8] border-l border-stone-300 p-5 flex flex-col", className)}>
	<h2 class="font-mono text-[10px] font-bold tracking-[0.3em] text-matte/40 uppercase mb-4">
		Components Used
	</h2>
	
	<nav class="flex flex-col gap-1">
		{#each parts as part, i}
			<button
				class={cn(
					"text-left px-3 py-2 rounded-sm transition-all duration-150 cursor-pointer group relative",
					isHighlighted(part.id) && "bg-signal/10",
					copiedId === part.id && "bg-green-100"
				)}
				onmouseenter={() => setHighlight(part.id)}
				onmouseleave={() => setHighlight(null)}
				onclick={() => copyComponent(part)}
			>
				<div class="flex items-baseline gap-2">
					<span class="font-mono text-[10px] text-matte/30 tabular-nums">
						{String(i + 1).padStart(2, '0')}.
					</span>
					<span 
						class={cn(
							"font-mono text-xs font-medium transition-colors",
							copiedId === part.id ? "text-green-600" : isHighlighted(part.id) ? "text-signal" : "text-matte/70"
						)}
					>
						{copiedId === part.id ? '✓ Copied!' : part.name}
					</span>
				</div>
				<p class="font-mono text-[9px] text-matte/40 mt-0.5 ml-6">
					{part.desc}
				</p>
				{#if part.children}
					<div class="ml-6 mt-1 flex flex-wrap gap-1">
						{#each part.children as child}
							<span class="font-mono text-[8px] text-matte/30 bg-stone-200/50 px-1.5 py-0.5 rounded">
								{child}
							</span>
						{/each}
					</div>
				{/if}
				<svg 
					class="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-matte/20 opacity-0 group-hover:opacity-100 transition-opacity" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
				</svg>
			</button>
		{/each}
	</nav>

	{#if fullPageTemplate}
		<div class="mt-6 pt-4 border-t border-stone-300">
			<button
				onclick={copyAll}
				class={cn(
					"w-full px-4 py-3 rounded-sm font-mono text-[10px] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer",
					"border border-stone-300 hover:border-signal hover:text-signal",
					"flex items-center justify-center gap-2",
					copiedAll ? "bg-green-100 border-green-400 text-green-700" : "bg-bone/50 text-matte/60"
				)}
			>
				{#if copiedAll}
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					Page Copied!
				{:else}
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
					</svg>
					Copy Page Template
				{/if}
			</button>
			<p class="font-mono text-[8px] text-matte/30 text-center mt-2 leading-relaxed">
				Copy entire showroom layout to bootstrap your project
			</p>
		</div>
	{/if}

	<div class="mt-auto pt-6">
		<p class="font-mono text-[9px] tracking-[0.1em] text-matte/30 uppercase">
			Takt · Showroom {showroomNumber}
		</p>
	</div>
</aside>
