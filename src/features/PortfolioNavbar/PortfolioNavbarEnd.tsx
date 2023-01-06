import { FC } from 'react'
import { Button, Dropdown, Navbar, Swap } from 'react-daisyui'
import ContactIcon from '../../assets/face.png'
import { ReactComponent as MenuIcon } from '../../assets/menu.svg'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import { useChangeTheme, useUpdateSideMenu } from '../../hooks'
import { goToGithub, goToLinkedIn } from '../../utils'

export const PortfolioNavbarEnd: FC = () => {
  const { handleChangeTheme, active } = useChangeTheme()
  const { handleOpenSidebar } = useUpdateSideMenu()

  return (
    <Navbar.End>
      <Button
        shape="circle"
        color="ghost"
        className="bg-base-100 hover:bg-base-100 md:hidden inline-flex"
        onClick={handleOpenSidebar}
      >
        <MenuIcon className="h-8 w-8" />
      </Button>
      <Button
        shape="circle"
        color="ghost"
        onClick={handleChangeTheme}
        className="mr-4 bg-base-100 hover:bg-base-100 md:inline-flex hidden"
      >
        <Swap
          rotate
          active={active}
          onElement={<SunIcon className="h-6 w-6" />}
          offElement={<MoonIcon className="h-6 w-6" />}
        />
      </Button>
      <Dropdown
        hover
        className="md:inline-flex hidden"
      >
        <Dropdown.Toggle color="primary">
          Contact
          <img
            src={ContactIcon}
            className="w-7 ml-2"
            alt="Contact Icon"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={goToGithub}>GITHUB</Dropdown.Item>
          <Dropdown.Item onClick={goToLinkedIn}>LINKEDIN</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.End>
  )
}
