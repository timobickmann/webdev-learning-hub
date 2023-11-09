<script>
	import TodoCard from './TodoCard.svelte';
	import { slide } from 'svelte/transition';

	let filterIsOpen = false;
</script>

<h2 class="h2 mb-2">Todos Page</h2>

<hr class="w-full my-2" />

<div>
	<button class="btn btn-primary">Add Todo</button>
	<button on:click={() => (filterIsOpen = !filterIsOpen)} class="btn">filter</button>
</div>

{#if filterIsOpen}
	<div
		transition:slide={{ duration: 500 }}
		class="
		w-full bg-surface-800 text-3xl text-center py-10 my-2"
	>
		filter area
	</div>
{/if}

<div class="flex flex-col sm:flex-row gap-5 w-full my-5">
	<div class="space-y-2 sm:w-1/3 w-full">
		<h3 class="h3">Todo</h3>
		<TodoCard />
	</div>
	<div class="space-y-2 sm:w-1/3 w-full">
		<h3 class="h3">Doing</h3>
		<TodoCard />
	</div>
	<div class="space-y-2 sm:w-1/3 w-full">
		<h3 class="h3">Done</h3>
		<TodoCard />
	</div>
</div>
