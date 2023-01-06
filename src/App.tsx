import { FC, useEffect } from 'react'
import { Drawer, Theme } from 'react-daisyui'
import { updateTheme } from './app/app'
import { useAppDispatch, useAppSelector } from './app/hooks'
import {
  ComputerCraft,
  CurrentExperience,
  Experiences,
  Hero,
  PortfolioNavbar,
  Footer,
  DrawerMenu,
} from './features'
import { detectTheme } from './utils'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { theme, sideMenuOpen } = useAppSelector((state) => state.app)

  useEffect(() => {
    dispatch(updateTheme(detectTheme()))
  }, [])

  return (
    <Theme dataTheme={theme}>
      <Drawer
        open={sideMenuOpen}
        side={<DrawerMenu />}
      >
        <div className="App max-w-[1600px] mx-auto">
          <PortfolioNavbar />
          <Hero />
          <ComputerCraft />
          <CurrentExperience />
          <Experiences />
          <Footer />
        </div>
      </Drawer>
    </Theme>
  )
}

export default App
