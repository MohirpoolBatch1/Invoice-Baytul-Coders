import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.jpg'
import Theme from '../assets/icon-moon.svg'

function Sidebar() {
  return (
    <div className="sidebar h-screen w-[6.438rem] rounded-tr-[1.25rem] rounded-br-[1.25rem]">
      <div className="sidebar-top h-[6.438rem] w-[6.438rem] bg-purple absolute rounded-br-[1.25rem] rounded-tr-[1.25rem] flex justify-center items-center">
        <img src={Logo} alt="Logo" width={40} height={40} className="z-10" />
        <div className="sidebar-inner h-[3.25rem] w-[6.438rem] bg-purple-light absolute top-[3.188rem] rounded-tl-[1.25rem] rounded-br-[1.25rem]"></div>
      </div>
      <div className="sidebar-bottom w-[6.438rem] bg-[#373B53] h-screen bg-grayBlack rounded-tr-[1.25rem] rounded-br-[1.25rem] flex flex-col justify-end items-center ">
        <div className="sidebar-theme pb-8">
          <img src={Theme} alt="Theme" width={20} height={20} />
        </div>
        <div className="w-full bg-gray-400 h-[0.063rem] inline-block" />
        <div className="sidebar-avatar py-6">
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
