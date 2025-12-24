<script lang="ts">
	let { label = 'ACTION', onclick }: { label: string; onclick?: () => void } = $props();
</script>

<button 
	{onclick}
	class="w-16 h-16 rounded-full font-mono text-[10px] font-semibold tracking-wider uppercase text-white bg-signal cursor-pointer transition-all duration-100 active:scale-95 active:translate-y-px shadow-md hover:shadow-lg flex items-center justify-center"
	style="background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent 40%, rgba(0,0,0,0.15))"
>
	{label}
</button>
