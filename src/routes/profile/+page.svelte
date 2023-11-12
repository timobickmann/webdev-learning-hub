<script lang="ts">
	import { enhance } from "$app/forms";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Profile</h1>
<p>User id: {data.userId}</p>
<p>GitHub username: {data.githubUsername}</p>
<form method="POST" action="?/logout" use:enhance>
	<input class="mt-5 btn cursor-pointer variant-filled" type="submit" value="Sign out" />
</form>