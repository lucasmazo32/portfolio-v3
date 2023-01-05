import { useAppSelector } from '../app/hooks'

type PlacesToScroll = 'scrollToAbout' | 'scrollToExperience' | 'scrollToContact'

export const useScrollTo = (): Record<PlacesToScroll, () => void> => {
  const { goToAbout, goToContact, goToExperience } = useAppSelector(
    (state) => state.app,
  )

  return {
    scrollToAbout: () => goToAbout?.(),
    scrollToExperience: () => goToExperience?.(),
    scrollToContact: () => goToContact?.(),
  }
}
