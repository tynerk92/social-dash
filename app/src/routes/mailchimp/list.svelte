<script>
  import { onMount } from 'svelte'
  import List from '$lib/list/List.svelte';

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  const listName = urlParams.get('listName')

  let members = [
    {
      id: '1',
      email_address: 'tynerk92@gmail.com',
      full_name: 'Kylon Tyner'
    },
    {
      id: '2',
      email_address: 'kylon.tyner@gmail.com',
      full_name: 'Kylon Tyner'
    }
  ]

  onMount(async () => {
    const result = await fetch(`/.netlify/functions/mailchimp?call=listMembers&id=${id}`)
    const json = await result.json()
    if (json) {
      members = json.members
    }
  })
</script>

<List title='Members of {listName}'>
  {#each members as member, i (member.id)}
    <li>{i+1}. {member['full_name']} {member['email_address']}</li>
  {/each}
</List>
