import { MouseEventHandler } from 'react'
import { updateTheme } from '../app/app'
import { useAppDispatch, useAppSelector } from '../app/hooks'

interface changeThemeReturn {
  active: boolean
  handleChangeTheme: MouseEventHandler<HTMLButtonElement>
}

export const useChangeTheme = (): changeThemeReturn => {
  const theme = useAppSelector((state) => state.app.theme)
  const dispatch = useAppDispatch()

  const active = theme === 'light'

  const handleChangeTheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (active) {
      dispatch(updateTheme('dark'))
    } else {
      dispatch(updateTheme('light'))
    }
  }

  return {
    active,
    handleChangeTheme,
  }
}
