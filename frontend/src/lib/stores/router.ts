import { writable } from 'svelte/store'

export const page = writable('/')

export function navigate(path: string) {
  page.set(path)
  window.history.pushState({}, '', path)
}

export function initRouter() {
  const handlePopState = () => {
    page.set(window.location.pathname)
  }
  
  window.addEventListener('popstate', handlePopState)
  page.set(window.location.pathname)
  
  return () => {
    window.removeEventListener('popstate', handlePopState)
  }
}
