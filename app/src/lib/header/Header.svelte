<script lang="ts">
	import { page } from '$app/stores';
	import logo from './Logo.svg';
  import { onMount } from 'svelte'
  import { user, identity } from '../../store/user.js'

  let avatarURL;

  onMount(() => {
    avatarURL =`https://www.gravatar.com/avatar/${ $user.gravatarHash }`;
  })

</script>

<header>
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
    <div on:click={() => identity.logout(user)} class="profile">
      <p>{$user.username}</p>
      <img class="avatar" src={avatarURL} alt="" />
    </div>
</header>

<style lang="scss">
	header {
    height: var(--heading-height);
		display: flex;
		justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    padding: 0 2rem;
	}

  a {
    height: var(--heading-height);
    line-height: var(--heading-height);
    display: flex;
    align-items: center;
  }

  .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem;
    height: 100%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    p {
      margin-right: 1rem;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 48px;
    }
  }
</style>
