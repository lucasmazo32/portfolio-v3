import { FC } from 'react'
import { Navbar } from 'react-daisyui'
import { PortfolioNavbarCenter } from './PortfolioNavbarCenter'
import { PortfolioNavbarEnd } from './PortfolioNavbarEnd'
import { PortfolioNavbarStart } from './PortfolioNavbarStart'

export const PortfolioNavbar: FC = () => {
  return (
    <Navbar className="px-4 sticky top-0 z-20 bg-base-100">
      <PortfolioNavbarStart />
      <PortfolioNavbarCenter />
      <PortfolioNavbarEnd />
    </Navbar>
  )
}
