import React from 'react'
import spinner from './Eclipse-1s-201px.svg'

function Spinner({isOpen}) {
  return (
    <div
      className={`${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed inset-0 z-50 flex items-center justify-center bg-white/40 transition-all duration-300`}
    >
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner
