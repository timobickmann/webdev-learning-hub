<script lang="ts">
	import type { PageData } from './$types';
	import { userStore } from '$lib/stores';

	export let data: PageData;

	userStore.setUser(data.user);
</script>

<h1 class="h1 mb-10">Sign In</h1>
<a class="btn variant-filled-primary" href="/login/github">Sign in with GitHub</a>
