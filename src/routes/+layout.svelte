<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import GithubIcon from '~icons/fa/github';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<img class="h-8" src="favicon.png" alt="app logo" />
			</svelte:fragment>
			<strong class="text-xl">Timos Learning Hub</strong>
			<svelte:fragment slot="trail">
				<a href="https://github.com/timobickmann/webdev-learning-hub"><GithubIcon /> </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
