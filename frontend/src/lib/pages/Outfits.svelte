<script lang="ts">
  import { CATEGORIES, getItemsByCategory, type CarouselItem, type CategoryKey } from '../data/defaults'

  let selectedItems = $state<Record<string, CarouselItem | null>>({
    outerwear: null,
    tops: null,
    bottoms: null,
    shoes: null,
    accessories: null,
  })

  function selectItem(category: string, item: CarouselItem) {
    selectedItems[category] = selectedItems[category]?.id === item.id ? null : item
  }

  let hasSelection = $derived(Object.values(selectedItems).some(Boolean))
  let selectedCount = $derived(Object.values(selectedItems).filter(Boolean).length)

  function clearOutfit() {
    for (const key of Object.keys(selectedItems)) {
      selectedItems[key] = null
    }
  }

  // Reorder: outerwear first (top of body), accessories last
  const outfitOrder = [
    { key: 'outerwear', label: 'Outerwear' },
    { key: 'tops', label: 'Tops' },
    { key: 'bottoms', label: 'Bottoms' },
    { key: 'shoes', label: 'Shoes' },
    { key: 'accessories', label: 'Accessories' },
  ] as const
</script>

<div class="max-w-6xl mx-auto px-6 py-12">
  <div class="flex justify-between items-end mb-12">
    <div>
      <h1 class="text-4xl font-black uppercase tracking-tighter mb-1" style="color: var(--color-fg);">
        Build Outfit
      </h1>
      <p class="text-sm uppercase tracking-widest" style="color: var(--color-fg-muted);">
        Pick one from each row
      </p>
    </div>

    {#if hasSelection}
      <div class="flex gap-3">
        <button
          onclick={clearOutfit}
          class="text-xs font-bold uppercase tracking-widest px-4 py-2 border cursor-pointer transition-colors"
          style="border-color: var(--color-fg); color: var(--color-fg); background: transparent;"
        >
          Clear
        </button>
        <button
          onclick={() => alert('Outfit saved! (Demo)')}
          class="text-xs font-bold uppercase tracking-widest px-4 py-2 cursor-pointer"
          style="background-color: var(--color-fg); color: var(--color-bg);"
        >
          Save ({selectedCount})
        </button>
      </div>
    {/if}
  </div>

  <!-- Stacked rows -->
  <div class="space-y-0">
    {#each outfitOrder as category}
      {@const items = getItemsByCategory(category.key)}
      <section class="border-t py-6" style="border-color: var(--color-border);">
        <div class="flex items-center gap-4 mb-4">
          <h2 class="text-xs font-black uppercase tracking-widest w-28 shrink-0"
            style="color: var(--color-fg-muted);">
            {category.label}
          </h2>
          {#if selectedItems[category.key]}
            <span class="text-xs font-bold uppercase tracking-widest px-2 py-0.5"
              style="background-color: var(--color-fg); color: var(--color-bg);">
              {selectedItems[category.key]?.title}
            </span>
          {/if}
        </div>

        <div class="flex gap-3 overflow-x-auto pb-2" style="-webkit-overflow-scrolling: touch;">
          {#each items as item (item.id)}
            {@const selected = selectedItems[category.key]?.id === item.id}
            <button
              onclick={() => selectItem(category.key, item)}
              class="shrink-0 text-left cursor-pointer transition-all border-2 group"
              style="
                border-color: {selected ? 'var(--color-fg)' : 'var(--color-border)'};
                background-color: var(--color-bg-card);
                outline: {selected ? '2px solid var(--color-fg)' : 'none'};
                outline-offset: 2px;
              "
            >
              <div class="w-44 aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  class="w-full h-full object-cover transition-all duration-300"
                  class:grayscale={!selected}
                  class:grayscale-0={selected}
                  loading="lazy"
                  draggable="false"
                />
                {#if selected}
                  <div class="absolute top-0 right-0 w-6 h-6 flex items-center justify-center text-xs font-black"
                    style="background-color: var(--color-fg); color: var(--color-bg);">
                    ✓
                  </div>
                {/if}
              </div>
              <div class="p-2">
                <div class="text-xs font-black uppercase" style="color: var(--color-fg);">
                  {item.title}
                </div>
                <p class="text-[10px] mt-0.5" style="color: var(--color-fg-muted);">
                  {item.description}
                </p>
              </div>
            </button>
          {/each}
        </div>
      </section>
    {/each}
  </div>

  <!-- Summary strip -->
  {#if hasSelection}
    <div class="border-t border-b py-6 mt-8" style="border-color: var(--color-border);">
      <div class="text-xs font-black uppercase tracking-widest mb-4" style="color: var(--color-fg-muted);">
        Outfit Summary
      </div>
      <div class="flex gap-6 overflow-x-auto">
        {#each outfitOrder as category}
          <div class="shrink-0 text-center">
            <div class="text-[10px] uppercase tracking-widest mb-1" style="color: var(--color-fg-muted);">
              {category.label}
            </div>
            {#if selectedItems[category.key]}
              <div class="w-20 aspect-square overflow-hidden border mx-auto"
                style="border-color: var(--color-fg);">
                <img
                  src={selectedItems[category.key]?.image}
                  alt={selectedItems[category.key]?.title}
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="text-[10px] font-bold uppercase mt-1" style="color: var(--color-fg);">
                {selectedItems[category.key]?.title}
              </div>
            {:else}
              <div class="w-20 aspect-square border flex items-center justify-center mx-auto"
                style="border-color: var(--color-border);">
                <span class="text-lg" style="color: var(--color-border);">—</span>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
