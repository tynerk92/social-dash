<script>
  import { onMount } from 'svelte'
  import List from '$lib/list/List.svelte'

  let lists = [
    {
      id: 1,
      name: 'Kylon Tyner'
    },
    {
      id: 2,
      name: 'Brittany Tyner'
    },
    {
      id: 3,
      name: 'Zoe Tyner'
    }
  ]

  onMount(async () => {
    const result = await fetch('/.netlify/functions/mailchimp?call=allLists')
    const json = await result.json()
    if (json) {
      lists = json.lists
    }
  })

</script>

<List title="Mailchimp Lists">
  {#each lists as list, i (list.id)}
    <li>
      <a href="mailchimp/list?id={list['id']}&listName={list['name']}">
      {i+1}. {list['name']}
      </a>
    </li>
  {/each}
</List>
