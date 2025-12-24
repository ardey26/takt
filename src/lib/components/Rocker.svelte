<script lang="ts">
	import { cn } from '$lib/utils';
	
	export interface RockerOption {
		value: string;
		label: string;
		disabled?: boolean;
	}
	
	export interface RockerProps {
		options: RockerOption[];
		value?: string;
		size?: 'sm' | 'md';
		class?: string;
		onchange?: (value: string) => void;
	}
	
	let { 
		options = [],
		value = $bindable(''),
		size = 'md',
		class: className,
		onchange
	}: RockerProps = $props();
	
	function handleSelect(optionValue: string, disabled?: boolean) {
		if (disabled) return;
		value = optionValue;
		onchange?.(optionValue);
	}
	
	const sizeClasses = {
		sm: 'h-7 px-3 text-[9px]',
		md: 'h-9 px-4 text-[10px]'
	};
</script>

<div 
	class={cn("inline-flex rounded-sm slot p-0.5", className)}
	role="radiogroup"
>
	{#each options as option}
		<button
			type="button"
			role="radio"
			aria-checked={value === option.value}
			aria-disabled={option.disabled}
			disabled={option.disabled}
			onclick={() => handleSelect(option.value, option.disabled)}
			class={cn(
				"font-mono font-bold tracking-[0.15em] uppercase transition-all duration-100 cursor-pointer",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-1",
				sizeClasses[size],
				value === option.value 
					? "bg-matte text-bone rounded-[2px] shadow-sm" 
					: "bg-transparent text-matte/60 hover:text-matte",
				option.disabled && "opacity-40 cursor-not-allowed"
			)}
		>
			{option.label}
		</button>
	{/each}
</div>
