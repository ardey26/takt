<script lang="ts">
	import { cn } from '$lib/utils';
	
	interface Props {
		steps: string[];
		currentStep?: number;
		class?: string;
		[key: string]: any;
	}

	let { steps = [], currentStep = 0, class: className, ...rest }: Props = $props();
</script>

<div class={cn("flex items-center space-x-4", className)} {...rest}>
	{#each steps as step, index}
		<div class="flex items-center">
			<div class={cn(
				"flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium transition-colors",
				index <= currentStep ? "border-signal bg-signal text-surface" : "border-matte/30 text-matte"
			)}>
				{index + 1}
			</div>
			<span class={cn(
				"ml-2 text-sm font-medium",
				index <= currentStep ? "text-signal" : "text-matte/50"
			)}>
				{step}
			</span>
			{#if index < steps.length - 1}
				<div class="w-12 h-[2px] mx-4 bg-matte/10">
					<div 
						class={cn("h-full bg-signal transition-all duration-300", index < currentStep ? "w-full" : "w-0")}
					></div>
				</div>
			{/if}
		</div>
	{/each}
</div>
