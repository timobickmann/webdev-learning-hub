<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '$lib/stores';

	import type { PageData } from './$types';

	export let data: PageData;
	const user = data.user

	userStore.setUser({ username: user.name, userRole: user.role });
</script>

<h1>Profile</h1>
<p>GitHub username: {user.username}</p>
<form method="POST" action="?/logout" use:enhance>
	<input class="mt-5 btn cursor-pointer variant-filled" type="submit" value="Sign out" />
</form>
