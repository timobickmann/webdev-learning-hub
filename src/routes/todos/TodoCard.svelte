<script lang="ts">
	import CalendarIcon from '~icons/fa/calendar';
	import CommentIcon from '~icons/fa/comment';
	import type { Todo } from '@prisma/client';

	import { getModalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import EditTodoModal from './EditTodoModal.svelte';

	export let todo: Todo;

	const modalStore = getModalStore();

	const EditTodoModalComponent: ModalComponent = {
		ref: EditTodoModal,
		props: {
			todo: todo
		}
	};

	const editTodoModal: ModalSettings = {
		type: 'component',
		component: EditTodoModalComponent,
		meta: {
			todo: todo
		}
	};

</script>

<div class="card py-2 pr-2 w-full space-y-2">
	<div class="flex">
		<span class="w-8 flex justify-center items-center"><input type="checkbox" /></span>
		<p class="font-bold">{todo.title}</p>
	</div>
	<div class="flex px-8 text-sm gap-2">
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
		<button class="btn btn-sm variant-filled" on:click={() => modalStore.trigger(editTodoModal)}
			>Edit</button
		>
		<form action="?/deleteTodo" method="POST">
			<input type="hidden" name="id" value={todo.id} />
			<button type="submit" class="btn btn-sm variant-filled-error">Delete</button>
		</form>
	</div>
</div>
