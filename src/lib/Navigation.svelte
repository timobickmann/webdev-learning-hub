<script>
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Todos', href: '/todos' },
  ];
</script>

<nav>
  {#each navItems as { name, href }}
    <a class="btn hover:variant-soft-primary" href={href}>{name}</a>
  {/each}
</nav>