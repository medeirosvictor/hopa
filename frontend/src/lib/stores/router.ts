import { writable } from 'svelte/store'

export const page = writable(window.location.pathname)

export function navigate(path: string) {
  page.set(path)
  window.history.pushState({}, '', path)
}

export function initRouter() {
  page.set(window.location.pathname)

  const handlePopState = () => {
    page.set(window.location.pathname)
  }

  // Intercept all internal <a> clicks for SPA navigation
  const handleClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a')
    if (
      !anchor ||
      !anchor.href ||
      anchor.target === '_blank' ||
      anchor.hasAttribute('data-external') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey
    ) return

    const url = new URL(anchor.href)
    if (url.origin !== window.location.origin) return

    e.preventDefault()
    navigate(url.pathname)
  }

  window.addEventListener('popstate', handlePopState)
  document.addEventListener('click', handleClick)

  return () => {
    window.removeEventListener('popstate', handlePopState)
    document.removeEventListener('click', handleClick)
  }
}
