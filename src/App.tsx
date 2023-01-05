import { FC } from 'react'
import { Theme } from 'react-daisyui'
import { useAppSelector } from './app/hooks'
import { ComputerCraft, Hero, PortfolioNavbar } from './features'

const App: FC = () => {
  const theme = useAppSelector((state) => state.app.theme)

  return (
    <div className="App">
      <Theme dataTheme={theme}>
        <PortfolioNavbar />
        <Hero />
        <ComputerCraft />
      </Theme>
    </div>
  )
}

export default App
