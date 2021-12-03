<script lang="ts">
  import { onMount } from 'svelte'
	import Header from '$lib/header/Header.svelte'
  import Nav from '$lib/nav/Nav.svelte'
  import Button from '$lib/button/Button.svelte'
	import '../app.scss'
  import { user, identity } from '../store/user.js'

  let loading = true;
  $: isLoggedIn = !!$user

  onMount(async () => {
    await identity.init()
    loading = false;
  })
</script>


{#if !loading && isLoggedIn}
  <Header />
  <main>
    <Nav />
    <section>
  	 <slot />
    </section>
  </main>
{:else if !loading}
  <div class="login-wrapper">
    <div class="login">
      <h1>It looks like you're not signed in!</h1>
      <div class="login-buttons">
        <Button onClick={() => identity.login(user)}>Log In</Button>
        <Button secondary onClick={() => identity.signup(user)}>Sign Up</Button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  main {
    display: flex;
    height: calc(100vh - var(--heading-height));
  }

  section {
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
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

  .login-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
</style>
