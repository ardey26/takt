<script lang="ts">
	let { 
		variant = 'in-stock', 
		label = '' 
	}: { 
		variant: 'in-stock' | 'low-stock' | 'out-of-stock'; 
		label: string 
	} = $props();
</script>

<span 
	class="inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wide rounded-sm"
	class:bg-green-100={variant === 'in-stock'}
	class:text-green-800={variant === 'in-stock'}
	class:bg-amber-100={variant === 'low-stock'}
	class:text-amber-800={variant === 'low-stock'}
	class:bg-red-100={variant === 'out-of-stock'}
	class:text-red-800={variant === 'out-of-stock'}
>
	{label}
</span>
