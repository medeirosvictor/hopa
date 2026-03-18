<script lang="ts">
  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import Router from './components/Router.svelte'
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
  <Header />
  
  <main class="flex-grow">
    <Router />
  </main>
  
  <Footer />
</div>
