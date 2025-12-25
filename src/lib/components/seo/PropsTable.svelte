<script lang="ts">
	import { cn } from '$lib/utils';
	import type { PropDefinition } from '$lib/data/componentRegistry';
	
	interface Props {
		props: PropDefinition[];
		componentName: string;
		class?: string;
	}
	
	let { props, componentName, class: className }: Props = $props();
</script>

<div class={cn("overflow-x-auto", className)}>
	<table class="w-full border-collapse text-sm">
		<caption class="sr-only">
			{componentName} component props
		</caption>
		<thead>
			<tr class="bg-[#E6E6E2] border border-stone-300">
				<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70 border-r border-stone-300">
					Prop
				</th>
				<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70 border-r border-stone-300">
					Type
				</th>
				<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70 border-r border-stone-300">
					Default
				</th>
				<th class="py-2 px-3 text-left text-[10px] font-bold uppercase tracking-wider text-matte/70">
					Description
				</th>
			</tr>
		</thead>
		<tbody>
			{#each props as prop}
				<tr class="border border-stone-300 hover:bg-stone-50 transition-colors">
					<td class="py-2 px-3 border-r border-stone-300">
						<code class="font-mono text-xs text-signal font-medium">
							{prop.name}
							{#if prop.required}
								<span class="text-red-500">*</span>
							{/if}
						</code>
					</td>
					<td class="py-2 px-3 border-r border-stone-300">
						<code class="font-mono text-xs text-matte/70 bg-stone-100 px-1 rounded">
							{prop.type}
						</code>
					</td>
					<td class="py-2 px-3 border-r border-stone-300 font-mono text-xs text-matte/60">
						{prop.default || '—'}
					</td>
					<td class="py-2 px-3 text-xs text-matte/80">
						{prop.description}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	
	{#if props.some(p => p.required)}
		<p class="mt-2 text-xs text-matte/50">
			<span class="text-red-500">*</span> Required prop
		</p>
	{/if}
</div>
