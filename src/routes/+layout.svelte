<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Modal, initializeStores } from '@skeletonlabs/skeleton';
	import { userStore } from '$lib/stores';
	import { onMount } from 'svelte';

	import { Avatar } from '@skeletonlabs/skeleton';
	import Navigation from './Navigation.svelte';

	//icons
	import GithubIcon from '~icons/fa/github';
	import TwoDimensionalCodeTwoIcon from '~icons/icon-park-outline/two-dimensional-code-two';

	onMount(async () => {
		const response = await fetch('/api/user');
		if (!response.ok) {
			userStore.setUser({ name: 'Guest', role: 'guest', username: 'guest' });
			return;
		}
		const data = await response.json();
		userStore.setUser({ name: data.user.name, role: data.user.role, username: data.user.username });
	});

	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="drop-shadow-2xl">
			<svelte:fragment slot="lead">
				<a aria-label="Home" href="/"
					><TwoDimensionalCodeTwoIcon
						class="hover:rotate-180 duration-500 ease-in-out h-8 w-8"
					/></a
				>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Navigation />
				<span class="flex">
					<a aria-label="User Profile" class="btn-icon hover:variant-soft-primary" href="/profile"
						><Avatar class="w-8 h-8"/></a
					>
					<a
						aria-label="Github Repository"
						class="btn-icon hover:variant-soft-primary"
						href="https://github.com/timobickmann/webdev-learning-hub"
						target="_blank"
						rel="noopener noreferrer"
						><GithubIcon class="h-8 w-8"/>
					</a></span
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main
		class="w-[98%] sm:w-4/5 h-full mx-auto flex flex-col justify-start items-center text-center sm:text-left sm:items-start pt-8"
	>
		<slot />
	</main>
</AppShell>
