import { FC } from 'react'
import { Button, Navbar } from 'react-daisyui'

export const PortfolioNavbarCenter: FC = () => {
  return (
    <Navbar.Center>
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
