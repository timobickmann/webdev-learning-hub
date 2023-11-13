<script lang="ts">
	import CalendarIcon from '~icons/fa/calendar';
	import CommentIcon from '~icons/fa/comment';
	import type { Todo } from '@prisma/client';
	import { enhance } from '$app/forms';

	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import EditTodoModal from './EditTodoModal.svelte';

	export let todo: Todo;
	export let userRole: string;

	const modalStore = getModalStore();
	$: EditTodoModalComponent.props = { todo: todo };

	const EditTodoModalComponent: ModalComponent = {
		ref: EditTodoModal,
		props: {
			todo: todo
		}
	};

	const editTodoModal: ModalSettings = {
		type: 'component',
		component: EditTodoModalComponent
	};

	function handleEditTodo() {
		if (userRole === 'admin') modalStore.trigger(editTodoModal);
		else modalStore.trigger({ type: 'alert', title: 'You are not allowed to edit todos' });
	}

	function handleDeleteTodo() {
		modalStore.trigger({ type: 'alert', title: 'You are not allowed to edit todos' });
	}
</script>

<div class="card p-2 w-full space-y-2">
	<p class="font-bold">{todo.title}</p>
	<div class="flex text-sm gap-2">
		<div class="flex gap-1 items-center">
			<CalendarIcon class="h-4 w-4" />
			<!-- {todo.date} -->
		</div>
		<!-- {#if todo.comment}
			<div><CommentIcon /></div>
		{/if} -->
	</div>
	<div class="flex px-8 text-sm gap-2">
		<!-- {#each todo.categories as category}
			<span class="badge variant-ghost-primary">{category}</span>
		{/each} -->
	</div>
	<div class="flex justify-end gap-2">
		<button class="btn btn-sm variant-filled" on:click={handleEditTodo}>Edit</button>
		<form action="?/deleteTodo" method="POST" use:enhance>
			<input type="hidden" name="id" value={todo.id} />
			{#if userRole == 'admin'}
				<button type="submit" class="btn btn-sm variant-filled-error">Delete</button>
			{:else}
				<button type="button" class="btn btn-sm variant-filled-error" on:click={handleDeleteTodo}
					>Delete</button
				>
			{/if}
		</form>
	</div>
</div>
