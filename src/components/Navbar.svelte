<script lang="ts">
	import type { NavbarInterface } from '@interfaces';

	export let links: NavbarInterface.NavLinks[] = [];
</script>

<nav>
	<div class="left">SvelteTemplate</div>
	<div class="right">
		{#each links as link, idx (idx)}
			<a href={link.to}>{link.name}</a>
		{/each}
	</div>
</nav>

<style scoped lang="scss">
	nav {
		width: 100%;
		height: var(--navbar-height);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 5vh;
		.left {
			width: 30%;
			font-weight: bold;
		}
		.right {
			width: 70%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
