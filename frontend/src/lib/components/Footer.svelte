<script lang="ts">
  import { darkMode, toggleDarkMode } from '../stores/theme'
</script>

<footer class="mt-auto border-t py-6" style="border-color: var(--color-border);">
  <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
    <span class="text-xs uppercase tracking-widest" style="color: var(--color-fg-muted);">
      Hopa © 2026
    </span>

    <button
      onclick={toggleDarkMode}
      class="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 border transition-colors cursor-pointer"
      style="
        border-color: var(--color-fg);
        color: {$darkMode ? 'var(--color-bg)' : 'var(--color-fg)'};
        background-color: {$darkMode ? 'var(--color-fg)' : 'transparent'};
      "
      aria-label="Toggle dark mode"
    >
      {$darkMode ? 'Light' : 'Dark'}
    </button>
  </div>
</footer>
