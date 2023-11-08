<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>


<AppShell>
	<svelte:fragment slot="header">
		
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Logo</strong>
			</svelte:fragment>
			<strong class="text-lg">Timos Learning Hub</strong> 
			<svelte:fragment slot="trail">
				<a href="#">github repo</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<slot />
</AppShell>
