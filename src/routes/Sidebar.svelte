<script>
	import { slide } from 'svelte/transition';
	let isOpen = true;
</script>

<div class="h-full relative bg-surface-100-800-token">
	{#if isOpen}
		<div
			class="flex items-center justify-center text-center w-40 h-full"
			transition:slide={{ duration: 500, axis: 'x' }}
		>
			this
			<br />
			<br />
			<br />
			is
			<br />
			<br />
			<br />
			a
			<br />
			<br />
			<br />
			awesome
			<br />
			<br />
			<br />
			sidebar
		</div>
	{/if}

	<button
		on:click={() => (isOpen = !isOpen)}
		class="flex items-center justify-center w-10 h-screen rounded-full absolute hover:animate-pulse -top-16 -right-8"
		style={`${!isOpen && 'transform: scaleX(-1); transition: transform 0.5s ease-in-out;'}`}
	>
	<iconify-icon width="24" class="text-surface-300" icon="fa6-solid:angle-left"></iconify-icon>

	</button>
</div>
