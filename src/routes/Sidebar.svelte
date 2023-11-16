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
		class="flex items-center justify-center bg-red-500 w-20 h-20 rounded-full absolute top-1/2 -right-10 -translate-y-1/2 z-50"
	/>
</div>
