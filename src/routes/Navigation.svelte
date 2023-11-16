<script>
	import { userStore } from '$lib/stores';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/todos">Todos</a>
	<a href="/code">Code</a>
	<a href="/notes">Notes</a>
	<a href="/howtos">How Tos</a>
	<a href="/projectboard">Projectboard</a>
	<select class="select max-w-fit cursor-pointer"
		><option value="Project 1">Project 1</option>
		<option value="Project 2">Project 2</option>
	</select>
	{#if $userStore.role === 'guest'}
		<a href="/login">Login</a>
	{/if}
</nav>

<style>
	a {
		@apply btn;
	}

	a:hover {
		@apply variant-soft-primary;
	}
</style>
