<script>
  export let title = 'Default Title'
</script>

<h1>{title}</h1>
<ul class="list-component">
  <slot />
</ul>

<style lang="scss">
  h1 {
    padding-left: 2rem;
  }
  ul.list-component {
    border-top: 4px solid #999;
    margin-top: 1rem;
    display: block;
    width: 100%;
  }

  ul.list-component :global(li) {
      font-size: 1.2em;
      list-style: none;
      height: 4rem;
      line-height: 4rem;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
      padding-left: 2rem;

      &:nth-of-type(2n - 1) {
        background-color: #f8f8f8;
      }

      &:hover {
        background-color: #ddd;
      }
  }

  ul.list-component :global(li > a) {
    display: block;
    color: black;
  }
</style>
