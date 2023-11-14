<script lang="ts">
	import { enhance } from '$app/forms';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<h3 class="h3">Add a new Todo</h3>
		<form
			class="flex flex-col gap-4"
			on:submit|preventDefault
			action="?/addTodo"
			method="POST"
			use:enhance
		>
			<label class="label"
				>Title
				<input class="input" type="text" name="title" />
			</label>
			<span class="flex justify-end gap-2">
				<button class="btn variant-filled-success" type="submit">Add Todo</button>
				<button class="btn variant-filled" on:click={() => modalStore.close()}>Cancel</button></span
			>
		</form>
	</div>
{/if}
