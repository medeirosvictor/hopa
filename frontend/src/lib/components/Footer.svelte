<script lang="ts">
  import { darkMode, toggleDarkMode } from '../stores/theme'
</script>

<footer class="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 py-4 mt-auto">
  <div class="container mx-auto px-4 flex justify-center items-center gap-3">
    <span class="text-sm text-gray-600 dark:text-gray-400">
      {$darkMode ? 'Dark' : 'Light'} Mode
    </span>
    <button
      onclick={toggleDarkMode}
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 {$darkMode ? 'bg-blue-600' : 'bg-gray-300'}"
      aria-label="Toggle dark mode"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform {$darkMode ? 'translate-x-6' : 'translate-x-1'}"
      ></span>
    </button>
  </div>
</footer>
