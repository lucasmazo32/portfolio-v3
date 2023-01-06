import { ThemeOptions } from '../types'

export const detectTheme = (): ThemeOptions => {
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }

  return 'light'
}
