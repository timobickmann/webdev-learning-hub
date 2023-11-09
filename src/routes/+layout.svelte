<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import Navigation from '$lib/Navigation.svelte';

	//icons
	import GithubIcon from '~icons/fa/github';
	import TwoDimensionalCodeTwoIcon from '~icons/icon-park-outline/two-dimensional-code-two';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			class="drop-shadow-2xl"
		>
			<svelte:fragment slot="lead">
				<a href="/"
					><TwoDimensionalCodeTwoIcon
						class="hover:rotate-180 duration-500 ease-in-out h-8 w-8"
					/></a
				>
			</svelte:fragment>
			<h2 class="h2">Timos Learning Hub</h2>
			<svelte:fragment slot="trail">
				<Navigation />
				<a
					class="btn-icon hover:variant-soft-primary"
					href="https://github.com/timobickmann/webdev-learning-hub"
					target="_blank"
					rel="noopener noreferrer"
					><GithubIcon />
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main class="container h-full mx-auto flex flex-col justify-start items-start pt-8"><slot /></main>
</AppShell>
