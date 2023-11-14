<script>
	import { userStore } from '$lib/stores';
</script>

<nav>
	<span>User: {$userStore.name}</span>
	<a class="btn hover:variant-soft-primary" href="/">Home</a>
	<a class="btn hover:variant-soft-primary" href="/todos">Todos</a>
	{#if $userStore.userRole === 'guest'}
		<a class="btn hover:variant-soft-primary" href="/login">Login</a>
	{:else}
		<a class="btn hover:variant-soft-primary" href="/profile">Profile</a>
	{/if}
</nav>
