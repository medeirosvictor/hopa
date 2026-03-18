import { writable } from 'svelte/store'

const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
const prefersDark =
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
const initial = stored ? stored === 'dark' : prefersDark

export const darkMode = writable(initial)

// Apply on load
if (initial) {
  document.documentElement.classList.add('dark')
}

export function toggleDarkMode() {
  darkMode.update((dark) => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    return next
  })
}
