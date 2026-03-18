<script lang="ts">
  import { onMount } from 'svelte'
  import { page, initRouter } from '../stores/router'
  import Closet from '../pages/Closet.svelte'
  import Outfits from '../pages/Outfits.svelte'
  import Stats from '../pages/Stats.svelte'

  onMount(() => initRouter())
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
