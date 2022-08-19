import React from 'react'
import spinner from './Eclipse-1s-201px.svg'

function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40">
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner
