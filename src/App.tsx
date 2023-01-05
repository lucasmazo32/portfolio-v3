import { FC } from 'react'
import { Theme } from 'react-daisyui'
import { useAppSelector } from './app/hooks'
import {
  ComputerCraft,
  CurrentExperience,
  Experiences,
  Hero,
  PortfolioNavbar,
  Footer,
} from './features'

const App: FC = () => {
  const theme = useAppSelector((state) => state.app.theme)

  return (
    <div className="App max-w-[1600px] mx-auto">
      <Theme dataTheme={theme}>
        <PortfolioNavbar />
        <Hero />
        <ComputerCraft />
        <CurrentExperience />
        <Experiences />
        <Footer />
      </Theme>
    </div>
  )
}

export default App
