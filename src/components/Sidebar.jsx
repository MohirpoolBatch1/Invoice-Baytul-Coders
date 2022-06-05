import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.jpg'
import Theme from '../assets/icon-moon.svg'

function Sidebar() {
  return (
    <div className="sidebar h-screen w-[103px] rounded-tr-[20px] rounded-br-[20px]">
      <div className="sidebar-top h-[103px] w-[103px] bg-purple absolute rounded-br-[20px] rounded-tr-[20px] flex justify-center items-center">
        <img src={Logo} alt="Logo" width={40} height={40} className="z-10" />
        <div className="sidebar-inner h-[52px] w-[103px] bg-purple-light absolute top-[51px] rounded-tl-[20px] rounded-br-[20px]"></div>
      </div>
      <div className="sidebar-bottom w-[103px] bg-[#373B53] h-screen bg-grayBlack rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-end items-center ">
        <div className="sidebar-theme pb-8">
          <img src={Theme} alt="Theme" width={20} height={20} />
        </div>
        <div className="w-full bg-gray-400 h-[1px] inline-block" />
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
