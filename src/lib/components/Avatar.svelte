<script lang="ts">
	let { initials = 'U', name = '' }: { initials: string; name?: string } = $props();
</script>

<div 
	class="w-8 h-8 rounded-full bg-stone-300 flex items-center justify-center text-[11px] font-mono font-semibold text-matte/70 uppercase"
	title={name}
>
	{initials}
</div>
