<script lang="ts">
	import TodoCard from './TodoCard.svelte';
	import { slide } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	export let { todosTodo, todosDoing, todosDone } = data;

	let filterIsOpen = false;
</script>

<h2 class="h2 mb-2">Todos Page</h2>

<hr class="w-full mt-2 mb-4" />

<div class="flex gap-5 mb-2">
	<button class="btn variant-filled-primary">Add Todo</button>
	<button on:click={() => (filterIsOpen = !filterIsOpen)} class="btn variant-filled">filter</button>
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

<div class="flex flex-col md:flex-row gap-5 w-full my-5">
	<div class="space-y-2 md:w-1/3 w-full">
		<h3 class="h3">Todo</h3>
		{#each todosTodo as todo}
			<p>Title: {todo.title} / Status: {todo.status}</p>
			<!-- <TodoCard {todo} /> -->
		{/each}
	</div>
	<div class="space-y-2 md:w-1/3 w-full">
		<h3 class="h3">Doing</h3>
		{#each todosDoing as todo}
			<p>Title: {todo.title} / Status: {todo.status}</p>
			<!-- <TodoCard {todo} /> -->
		{/each}
	</div>
	<div class="space-y-2 md:w-1/3 w-full">
		<h3 class="h3">Done</h3>
		{#each todosDone as todo}
			<p>Title: {todo.title} / Status: {todo.status}</p>
			<!-- <TodoCard {todo} /> -->
		{/each}
	</div>
</div>
