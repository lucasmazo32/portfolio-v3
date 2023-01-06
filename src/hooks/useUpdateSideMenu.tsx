import { updateSideMenuOpen } from '../app/app'
import { useAppDispatch } from '../app/hooks'

interface UpdateSideMenuReturn {
  handleOpenSidebar: () => void
  handleCloseSidebar: () => void
}

export const useUpdateSideMenu = (): UpdateSideMenuReturn => {
  const dispatch = useAppDispatch()

  const handleOpenSidebar = (): void => {
    dispatch(updateSideMenuOpen(true))
  }

  const handleCloseSidebar = (): void => {
    dispatch(updateSideMenuOpen(false))
  }

  return {
    handleCloseSidebar,
    handleOpenSidebar,
  }
}
