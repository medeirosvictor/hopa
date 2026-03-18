<script lang="ts">
  import { page, initRouter } from '../stores/router'
  import Closet from '../pages/Closet.svelte'
  import Outfits from '../pages/Outfits.svelte'
  import Stats from '../pages/Stats.svelte'
  import { onMount } from 'svelte'
  
  onMount(() => {
    const cleanup = initRouter()
    return cleanup
  })
</script>

{#if $page === '/'}
  <Closet />
{:else if $page === '/outfits'}
  <Outfits />
{:else if $page === '/stats'}
  <Stats />
{:else}
  <Closet />
{/if}
