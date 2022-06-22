import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'

const SignedUser = () => (
  <div className="App font-spartan flex h-screen w-screen bg-gray-100 font-medium">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/invoice/:invoiceId" element={<InvoiceDetail />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </div>
)
export default SignedUser
