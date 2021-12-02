<script>
  import { onMount } from 'svelte'
  import { env } from '$lib/env'

  let lists = []

  onMount(async () => {
    const result = await fetch('/.netlify/functions/mailchimp')
    const json = await result.json()
    lists = json.lists
  })

</script>

<ul>
  {#each lists as list (list.id)}
    <li>{list['name']}</li>
  {/each}
</ul>
