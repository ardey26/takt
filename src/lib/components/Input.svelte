<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface InputProps {
		value?: string;
		placeholder?: string;
		type?: 'text' | 'email' | 'password' | 'search' | 'number';
		icon?: 'search' | 'none';
		class?: string;
	}
	
	let { 
		value = $bindable(''),
		placeholder = '',
		type = 'text',
		icon = 'none',
		class: className
	}: InputProps = $props();
</script>

<div class={cn("relative flex-1", className)}>
	<input
		{type}
		bind:value
		{placeholder}
		class="w-full h-9 px-3 font-mono text-xs bg-[#E8E8E4] shadow-inner border border-stone-300 focus:outline-none focus:ring-1 focus:ring-signal/30 placeholder:text-matte/30 rounded-sm"
	/>
	{#if icon === 'search'}
		<svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-matte/30 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	{/if}
</div>
