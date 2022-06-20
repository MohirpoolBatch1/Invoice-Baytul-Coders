import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Modal from 'react-modal/lib/components/Modal'
import SignedUser from './SignedUser.jsx'
import UnsignedUser from './UnsignedUser.jsx'

Modal.setAppElement('#main')

function App() {
  // ! Bunga tegmay turasiz hozircha
  // eslint-disable-next-line no-unused-vars
  const [isSigned, setIsSigned] = useState(true)

  return (
    <BrowserRouter>
      {isSigned ? <SignedUser /> : <UnsignedUser />}
    </BrowserRouter>
  )
}

export default App
