import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Button from './components/Button/Button.jsx'

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-screen flex items-center bg-gray-100">
    <Sidebar />
    <Button buttonKind="danger">New Invoice</Button>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </div>
)
export default SignedUser
