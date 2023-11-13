<script>
	import { userStore } from '$lib/stores';
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Todos', href: '/todos' },
		{ name: 'Profile', href: '/profile' },
		{ name: 'Login', href: '/login' }
	];
</script>

<nav>
	<span>User: {$userStore.username}</span>
	{#each navItems as { name, href }}
		<a class="btn hover:variant-soft-primary" {href}>{name}</a>
	{/each}
</nav>
