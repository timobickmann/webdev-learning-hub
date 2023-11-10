<script lang="ts">
	import CalendarIcon from '~icons/fa/calendar';
	import CommentIcon from '~icons/fa/comment';
	import type { ITodo } from '$lib/interfaces';

	export let todo: ITodo
</script>

<div class="card py-2 pr-2 w-full space-y-2">
	<div class="flex">
		<span class="w-8 flex justify-center items-center"><input type="checkbox" /></span>
		<p class="font-bold">{todo.name}</p>
	</div>
	<div class="flex px-8 text-sm gap-2">
		<div class="flex gap-1 items-center">
			<CalendarIcon class="h-4 w-4" />
			{todo.date}
		</div>
		{#if todo.comment}
		<div><CommentIcon/></div>
		{/if}
	</div>
	<div class="flex px-8 text-sm gap-2">
		{#each todo.categories as category}
		<span class="badge variant-ghost-primary">{category}</span>
		{/each}
	</div>
</div>
