import { FC } from 'react'
import { Button, Dropdown, Swap } from 'react-daisyui'
import { ReactComponent as CloseIcon } from '../../assets/close.svg'
import { ReactComponent as MoonIcon } from '../../assets/moon.svg'
import { ReactComponent as SunIcon } from '../../assets/sun.svg'
import ContactIcon from '../../assets/face.png'
import { useChangeTheme, useScrollTo, useUpdateSideMenu } from '../../hooks'
import { goToGithub, goToLinkedIn } from '../../utils'

export const DrawerMenu: FC = () => {
  const { handleChangeTheme, active } = useChangeTheme()
  const { handleCloseSidebar } = useUpdateSideMenu()
  const { scrollToAbout, scrollToContact, scrollToExperience } = useScrollTo()

  const handleAbout = (): void => {
    handleCloseSidebar()
    scrollToAbout()
  }

  const handleContact = (): void => {
    handleCloseSidebar()
    scrollToContact()
  }

  const handleExperience = (): void => {
    handleCloseSidebar()
    scrollToExperience()
  }

  return (
    <div className="w-screen h-screen-cust bg-base-100 relative flex flex-col px-8">
      <Button
        shape="circle"
        color="ghost"
        className="absolute bg-base-100 hover:bg-base-100 top-4 right-2"
        onClick={handleCloseSidebar}
      >
        <CloseIcon className="h-8 w-8" />
      </Button>
      <span className="inline-block lg:text-3xl text-2xl text-center mt-20">
        <b>LUCAS</b>MAZO
      </span>
      <div className="mt-16 flex flex-col gap-8">
        <a onClick={handleAbout} className="text-4xl font-bold">About</a>
        <a onClick={handleExperience} className="text-4xl font-bold">Experience</a>
        <a onClick={handleContact} className="text-4xl font-bold">Contact</a>
      </div>
      <div className="mt-11 flex flex-col">
        <span className="text-base-300">Theme</span>
        <Button
          shape="circle"
          color="ghost"
          onClick={handleChangeTheme}
          className="mr-4 bg-base-100 hover:bg-base-100"
        >
          <Swap
            rotate
            active={active}
            onElement={<SunIcon className="h-6 w-6" />}
            offElement={<MoonIcon className="h-6 w-6" />}
          />
        </Button>
      </div>
      <div className="grow" />
      <Dropdown
        hover
        vertical="top"
        className="mb-12"
      >
        <Dropdown.Toggle
          className="btn-child-block"
          color="primary"
        >
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
    </div>
  )
}
