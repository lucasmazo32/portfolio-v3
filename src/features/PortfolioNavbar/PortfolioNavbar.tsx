import { FC } from 'react'
import { Navbar } from 'react-daisyui'
import { PortfolioNavbarCenter } from './PortfolioNavbarCenter'
import { PortfolioNavbarEnd } from './PortfolioNavbarEnd'
import { PortfolioNavbarStart } from './PortfolioNavbarStart'

export const PortfolioNavbar: FC = () => {
  return (
    <Navbar className='px-4'>
      <PortfolioNavbarStart />
      <PortfolioNavbarCenter />
      <PortfolioNavbarEnd />
    </Navbar>
  )
}
