<script lang="ts">
  import { page } from '$app/stores'
</script>

<div class="navigation">
  <nav>
    <ul>
      <li class:active={$page.path === '/'}>
        <a sveltekit:prefetch href="/">Dashboard</a>
      </li>
      <li class:active={$page.path.startsWith('/mailchimp')}>
        <a sveltekit:prefetch href="/mailchimp">Mailchimp</a>
      </li>
      <li class:active={$page.path === '/twitter'}>
        <a sveltekit:prefetch href="/twitter">Twitter</a>
      </li>
      <li class:active={$page.path.startsWith('/facebook')}>
        <a sveltekit:prefetch href="/facebook">Facebook</a>
      </li>
      <li class:active={$page.path === '/custom'}>
        <a sveltekit:prefetch href="/custom">Custom</a>
      </li>
    </ul>
  </nav>
</div>

<style lang="scss">
  .navigation {
    background: lightblue;
    width: 230px;
    height: 100%;
    color: white;
    background-color: var(--tertiary-color);

    nav {
      padding-top: 20px;
      a {
        width: 100%;
        color: var(--pure-white);
        line-height: 52px;
      }
      ul {
        li {
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          list-style: none;
          height: 52px;
          padding-left: 16px;

          &.active {
            &:before {
              content: '';
              position: absolute;
              width: 4px;
              background-color: var(--primary-color);
              height: 100%;
              top: 0;
              left: 0;
              border-radius: 10px;
            }
            a {
              color: var(--primary-color);
            }
          }

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
      }
    }
  }
</style>
