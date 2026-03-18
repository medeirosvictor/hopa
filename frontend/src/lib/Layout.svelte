<script lang="ts">
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Router from './components/Router.svelte'
</script>

<div class="min-h-screen flex flex-col" style="background-color: var(--color-bg); color: var(--color-fg);">
  <Header />

  <main class="flex-grow">
    <Router />
  </main>

  <Footer />
</div>
