import { FC } from 'react'
import { Button, Navbar } from 'react-daisyui'

export const PortfolioNavbarCenter: FC = () => {
  return (
    <Navbar.Center className="md:inline-flex hidden">
      <Button
        color="ghost"
        className="!font-semibold"
      >
        About
      </Button>
      <Button
        color="ghost"
        className="!font-semibold"
      >
        Experience
      </Button>
      <Button
        color="ghost"
        className="!font-semibold"
      >
        Contact
      </Button>
    </Navbar.Center>
  )
}
