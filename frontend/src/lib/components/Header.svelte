<script lang="ts">
  import { page } from '../stores/router'
</script>

<header class="border-b" style="border-color: var(--color-border); background-color: var(--color-bg);">
  <div class="max-w-6xl mx-auto px-6 pt-6 pb-4 flex flex-col items-center gap-4">
    <a
      href="/"
      class="text-3xl font-black uppercase tracking-tighter leading-none"
      style="color: var(--color-fg);"
    >
      Hopa
    </a>

    <nav class="flex gap-8">
      {#each [
        { href: '/', label: 'Closet' },
        { href: '/outfits', label: 'Outfits' },
        { href: '/stats', label: 'Stats' },
      ] as link}
        <a
          href={link.href}
          class="text-sm font-semibold uppercase tracking-widest pb-0.5 transition-none"
          style="
            color: {$page === link.href ? 'var(--color-fg)' : 'var(--color-fg-muted)'};
            border-bottom: {$page === link.href ? '2px solid var(--color-fg)' : '2px solid transparent'};
          "
        >
          {link.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
