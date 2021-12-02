<script>
  import { onMount } from 'svelte'

  let lists = [];

  onMount(async () => {
    const result = await fetch('https://laughing-shannon-bd470a.netlify.app/.netlify/functions/mailchimp')
    const json = await result.json()
    lists = json.lists
  })

</script>

<ul>
  {#each lists as list (list.id)}
    <li>{list['name']}</li>
  {/each}
</ul>
