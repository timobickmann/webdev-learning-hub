<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '$lib/stores';

	import type { PageData } from './$types';

	export let data: PageData;

	userStore.setUser({ username: data.name, userRole: data.role });
</script>

<h1>Profile</h1>
<p>GitHub username: {data.username}</p>
<form method="POST" action="?/logout" use:enhance>
	<input class="mt-5 btn cursor-pointer variant-filled" type="submit" value="Sign out" />
</form>
