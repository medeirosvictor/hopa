import { writable } from 'svelte/store'

export const darkMode = writable(false)

export function toggleDarkMode() {
  darkMode.update(dark => {
    const newValue = !dark
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return newValue
  })
}
