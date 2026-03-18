<script lang="ts">
  import Carousel from '../components/Carousel.svelte'
  import { CATEGORIES, getItemsByCategory } from '../data/defaults'
</script>

<div class="max-w-6xl mx-auto px-6 py-12">
  <h1 class="text-4xl font-black uppercase tracking-tighter mb-1" style="color: var(--color-fg);">
    Your Closet
  </h1>
  <p class="text-sm uppercase tracking-widest mb-12" style="color: var(--color-fg-muted);">
    Everything you own, organized
  </p>

  {#each CATEGORIES as category}
    {@const items = getItemsByCategory(category.key)}
    {#if items.length > 0}
      <section class="mb-14">
        <h2 class="text-lg font-black uppercase tracking-widest mb-6 border-b pb-2"
          style="color: var(--color-fg); border-color: var(--color-border);">
          {category.label}
        </h2>

        <div class="flex gap-2 overflow-x-auto pb-4" style="-webkit-overflow-scrolling: touch;">
          {#each items as item (item.id)}
            <div class="shrink-0 border" style="border-color: var(--color-border); background-color: var(--color-bg-card);">
              <div class="aspect-[3/4] w-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div class="p-3">
                <div class="text-sm font-black uppercase" style="color: var(--color-fg);">{item.title}</div>
                <p class="text-xs mt-0.5" style="color: var(--color-fg-muted);">{item.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  {/each}
</div>
