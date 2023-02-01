<script lang="ts">
	// Components
	import Navbar from '@components/Navbar.svelte';
	import Footer from '@components/Footer.svelte';

	// Interfaces
	import { NavbarInterface } from '@interfaces';

	// Global CSS
	import './styles.css';

	const links: NavbarInterface.NavLinks[] = [
		{ name: 'Home', to: '/' },
		{ name: 'About', to: '/about' },
		{ name: 'Posts', to: '/posts' }
	];
</script>

<div class="app">
	<Navbar {links} />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style scoped lang="scss">
	.app {
		main {
			min-height: calc(100vh - var(--navbar-height));
		}
	}
</style>
