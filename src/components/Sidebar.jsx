import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.jpg'
import {Context as ThemeContext} from '../context/theme.jsx'
import ThemeIcon from '../assets/icon-moon.svg'
import SunIcon from '../assets/icon-sun.svg'

function Sidebar() {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <div className="sidebar z-10 h-screen w-[6.438rem] rounded-tr-[1.25rem] rounded-br-[1.25rem]">
      <div className="sidebar-top absolute flex h-[6.438rem] w-[6.438rem] items-center justify-center rounded-br-[1.25rem] rounded-tr-[1.25rem] bg-purple">
        <img src={Logo} alt="Logo" width={40} height={40} className="z-10" />
        <div className="absolute top-[3.188rem] h-[3.25rem] w-[6.438rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] bg-purple-light"></div>
      </div>
      <div className="bg-grayBlack flex h-screen w-[6.438rem] flex-col items-center justify-end rounded-tr-[1.25rem] rounded-br-[1.25rem] bg-[#373B53] ">
        <div className="pb-8">
          <img
            src={`${theme ? SunIcon : ThemeIcon}`}
            alt="Theme"
            width={20}
            height={20}
            onClick={() => setTheme(!theme)}
          />
        </div>
        <div className="inline-block h-[0.063rem] w-full bg-gray-400" />
        <div className="py-6">
          <NavLink to={'/'}>
            <img
              src={Avatar}
              alt="Avatar"
              className="rounded-full"
              width={40}
              height={40}
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
