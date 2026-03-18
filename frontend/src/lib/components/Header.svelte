<script lang="ts">
  import { page } from '../stores/router'
</script>

<header class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" class="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
      Hopa
    </a>
    
    <nav class="flex gap-6">
      <a 
        href="/" 
        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page === '/' ? 'text-blue-600 dark:text-blue-400' : ''}"
      >
        Closet
      </a>
      <a 
        href="/outfits" 
        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page === '/outfits' ? 'text-blue-600 dark:text-blue-400' : ''}"
      >
        Outfits
      </a>
      <a 
        href="/stats" 
        class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors {$page === '/stats' ? 'text-blue-600 dark:text-blue-400' : ''}"
      >
        Stats
      </a>
    </nav>
  </div>
</header>
