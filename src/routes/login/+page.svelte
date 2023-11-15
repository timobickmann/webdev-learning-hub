<script lang="ts">
	import type { PageData } from './$types';
	import { userStore } from '$lib/stores';

	export let data: PageData;

	userStore.setUser(data.user);
</script>

<h2 class="h2 mb-10">Sign In</h2>
<a class="btn variant-filled-primary" href="/login/github">Sign in with GitHub</a>
