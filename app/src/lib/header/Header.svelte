<script lang="ts">
	import { page } from '$app/stores';
	import logo from './Logo.svg';
</script>

<header>
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
    <div data-netlify-identity-button>Login with Netlify Identity</div>
</header>

<style>
	header {
    height: var(--heading-height);
		display: flex;
		justify-content: space-between;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    padding: 0 2rem;
	}

  a {
    height: var(--heading-height);
    line-height: var(--heading-height);
    display: flex;
    align-items: center;
  }
</style>
