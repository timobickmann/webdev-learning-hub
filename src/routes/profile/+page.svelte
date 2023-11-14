<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '$lib/stores';

	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user;

	userStore.setUser({ name: user.name, userRole: user.role });

	let nameInput = user.name;

	function handleUserChange () {
		userStore.setUsername(nameInput)
	};
</script>

<h1>Profile</h1>
<p>GitHub username: {user.username}</p>
<form on:submit|preventDefault={handleUserChange} action="?/updateUser" method="POST" use:enhance>
	<label>
		<input class="input" type="text" name="nameInput" bind:value={nameInput} />Name</label
	>
	<input type="hidden" name="id" value={user.id}>
</form>
<form method="POST" action="?/logout" use:enhance>
	<input class="mt-5 btn cursor-pointer variant-filled" type="submit" value="Sign out" />
</form>