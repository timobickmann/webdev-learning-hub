<script>
	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Todos', href: '/todos' },
		{ name: 'Profile', href: '/profile' },
		{ name: 'Login', href: '/login' }
	];
</script>

<nav>
	{#each navItems as { name, href }}
		<a class="btn hover:variant-soft-primary" {href}>{name}</a>
	{/each}
</nav>
