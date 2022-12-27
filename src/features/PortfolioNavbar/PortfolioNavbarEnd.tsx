import { FC } from 'react'
import { Dropdown, Navbar } from 'react-daisyui'
import ContactIcon from '../../assets/face.png'

export const PortfolioNavbarEnd: FC = () => {
  return (
    <Navbar.End>
      <Dropdown
        hover
      >
        <Dropdown.Toggle
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
          <Dropdown.Item>GITHUB</Dropdown.Item>
          <Dropdown.Item>LINKEDIN</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.End>
  )
}
