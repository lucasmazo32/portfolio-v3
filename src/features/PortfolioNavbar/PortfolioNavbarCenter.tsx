import { FC } from 'react'
import { Button, Navbar } from 'react-daisyui'
import { useScrollTo } from '../../hooks'

export const PortfolioNavbarCenter: FC = () => {
  const { scrollToAbout, scrollToContact, scrollToExperience } = useScrollTo()

  return (
    <Navbar.Center className="md:inline-flex hidden">
      <Button
        color="ghost"
        className="!font-semibold"
        onClick={scrollToAbout}
      >
        About
      </Button>
      <Button
        color="ghost"
        className="!font-semibold"
        onClick={scrollToExperience}
      >
        Experience
      </Button>
      <Button
        color="ghost"
        className="!font-semibold"
        onClick={scrollToContact}
      >
        Contact
      </Button>
    </Navbar.Center>
  )
}
