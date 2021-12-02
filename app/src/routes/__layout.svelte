<script lang="ts">
	import Header from '$lib/header/Header.svelte';
  import Nav from '$lib/nav/Nav.svelte';
	import '../app.css';
</script>

<div data-netlify-identity-menu></div>

<Header />

<main>
  <Nav />
  <section>
	 <slot />
  </section>
</main>

<style>
  main {
    display: flex;
    height: calc(100vh - var(--heading-height));
  }

  section {
    width: 100%;
  }

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
