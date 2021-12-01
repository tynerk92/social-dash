<script>
  import mailchimp from '../mailchimp.js'
  import { onMount } from 'svelte'

  let lists = [];

  onMount(async () => {
    console.log("Mounting mailchimp");
    const data = await mailchimp.lists.getAllLists()
    console.log( data)
    return data.lists
  })

</script>

<ul>
  {#each lists as list (list.id)}
    <li>{list['name']}</li>
  {/each}
</ul>
