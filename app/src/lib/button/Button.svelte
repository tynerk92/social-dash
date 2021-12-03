<script>
  export let onClick = () => console.log("Default button click action")
  export let secondary;
</script>

<button on:click={onClick} style="
  background-color: {secondary ? 'transparent' : 'var(--tertiary-color)'};
  color: {secondary ? 'var(--tertiary-color)' : '#fff'};
  border: {secondary ? '1px solid var(--tertiary-color)' : 'none'}
">
  <slot />
</button>

<style lang="scss">
  button {
    color: white;
    position: relative;
    padding: 0.3rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:active {
      background-color: var(--primary-color-darker);
    }
  }
</style>
