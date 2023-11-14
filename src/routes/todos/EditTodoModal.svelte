<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Todo } from '@prisma/client';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let todo: Todo;

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<h3 class="h3">Edit Todo {todo.title}</h3>
		<form class="flex flex-col gap-4" on:submit|preventDefault action="?/editTodo" method="POST" use:enhance>
			<label class="label"
				>Title
				<input value={todo.title} class="input" type="text" name="title" />
			</label>
			<label class="label"
				>Status
				<select class="input" name="status">
					<option value="todo" selected={todo.status === 'todo'}>todo</option>
					<option value="doing" selected={todo.status === 'doing'}>doing</option>
					<option value="done" selected={todo.status === 'done'}>done</option>
				</select>
			</label>
			<input type="hidden" name="id" value={todo.id} />
			<span class="flex justify-end gap-2">
				<button class="btn variant-filled-success" type="submit">Edit Todo</button>
				<button class="btn variant-filled" on:click={() => modalStore.close()}>Cancel</button>
			</span>
		</form>
	</div>
{/if}
