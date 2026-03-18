<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import type { CarouselItem, CarouselProps } from '../data/defaults'

  let {
    items = [],
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
  }: CarouselProps = $props()

  const GAP = 12
  const PADDING = 12
  let itemWidth = $derived(baseWidth - PADDING * 2)
  let trackOffset = $derived(itemWidth + GAP)

  let renderItems: CarouselItem[] = $derived.by(() => {
    if (!loop || items.length === 0) return items
    return [items[items.length - 1], ...items, items[0]]
  })

  let position = $state(loop ? 1 : 0)
  let hovered = $state(false)
  let jumping = $state(false)

  let dragStartX = 0
  let dragCurrentX = 0
  let dragging = false

  let activeIndex = $derived.by(() => {
    if (items.length === 0) return 0
    if (loop) return ((position - 1) % items.length + items.length) % items.length
    return Math.min(position, items.length - 1)
  })

  function go(dir: 1 | -1) {
    const next = position + dir
    position = Math.max(0, Math.min(next, renderItems.length - 1))
  }

  function goTo(index: number) {
    position = loop ? index + 1 : index
  }

  function onDragStart(e: MouseEvent | TouchEvent) {
    dragging = true
    dragStartX = 'touches' in e ? e.touches[0].clientX : e.clientX
    dragCurrentX = dragStartX
  }

  function onDragMove(e: MouseEvent | TouchEvent) {
    if (!dragging) return
    dragCurrentX = 'touches' in e ? e.touches[0].clientX : e.clientX
  }

  function onDragEnd() {
    if (!dragging) return
    dragging = false
    const diff = dragStartX - dragCurrentX
    if (diff > 40) go(1)
    else if (diff < -40) go(-1)
  }

  function onTransitionEnd() {
    if (!loop || items.length <= 1) return
    const last = renderItems.length - 1

    if (position === last) {
      jumping = true
      position = 1
      requestAnimationFrame(() => { jumping = false })
    } else if (position === 0) {
      jumping = true
      position = items.length
      requestAnimationFrame(() => { jumping = false })
    }
  }

  // Autoplay
  let interval: ReturnType<typeof setInterval> | undefined

  onMount(() => {
    if (loop) position = 1

    if (autoplay && items.length > 1) {
      interval = setInterval(() => {
        if (pauseOnHover && hovered) return
        go(1)
      }, autoplayDelay)
    }
  })

  onDestroy(() => {
    if (interval) clearInterval(interval)
  })

  let trackX = $derived(-position * trackOffset)
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  class="relative overflow-hidden select-none"
  style="width: {baseWidth}px; padding: {PADDING}px;"
  role="region"
  aria-label="Carousel"
  onmouseenter={() => { hovered = true }}
  onmouseleave={() => { hovered = false; dragging = false }}
  onmousedown={onDragStart}
  onmousemove={onDragMove}
  onmouseup={onDragEnd}
  ontouchstart={onDragStart}
  ontouchmove={onDragMove}
  ontouchend={onDragEnd}
>
  <div
    class="flex"
    style="
      gap: {GAP}px;
      transform: translateX({trackX}px);
      transition: {jumping ? 'none' : 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)'};
    "
    ontransitionend={onTransitionEnd}
  >
    {#each renderItems as item, i (`${item.id}-${i}`)}
      <div
        class="shrink-0 flex flex-col overflow-hidden cursor-grab active:cursor-grabbing"
        style="width: {itemWidth}px; background-color: var(--color-bg-card);"
      >
        <div class="aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            loading="lazy"
            draggable="false"
          />
        </div>
        <div class="p-3">
          <div class="text-xs font-bold uppercase tracking-widest" style="color: var(--color-fg-muted);">
            {item.category}
          </div>
          <div class="text-sm font-black uppercase mt-0.5" style="color: var(--color-fg);">
            {item.title}
          </div>
          <p class="text-xs mt-1" style="color: var(--color-fg-muted);">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Arrows -->
  {#if items.length > 1}
    <button
      onclick={() => go(-1)}
      class="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-sm font-black cursor-pointer"
      style="background-color: var(--color-fg); color: var(--color-bg);"
      aria-label="Previous"
    >←</button>
    <button
      onclick={() => go(1)}
      class="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-sm font-black cursor-pointer"
      style="background-color: var(--color-fg); color: var(--color-bg);"
      aria-label="Next"
    >→</button>
  {/if}

  <!-- Dots -->
  {#if items.length > 1}
    <div class="flex justify-center gap-2 mt-3">
      {#each items as _, idx}
        <button
          onclick={() => goTo(idx)}
          class="w-2 h-2 cursor-pointer transition-transform"
          class:scale-150={activeIndex === idx}
          style="background-color: {activeIndex === idx ? 'var(--color-fg)' : 'var(--color-border)'};"
          aria-label="Go to slide {idx + 1}"
        ></button>
      {/each}
    </div>
  {/if}
</div>
