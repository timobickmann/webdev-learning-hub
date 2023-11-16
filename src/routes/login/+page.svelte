<script lang="ts">
	import type { PageData } from './$types';
	import { userStore } from '$lib/stores';

	export let data: PageData;

	userStore.setUser(data.user);
</script>

<h2 class="mb-10">Sign In</h2>
<hr class="w-full mt-2 mb-4" />

<a class="btn variant-filled-primary" href="/login/github">Sign in with GitHub</a>
