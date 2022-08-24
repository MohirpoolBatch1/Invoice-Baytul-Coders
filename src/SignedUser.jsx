import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import Sidebar from './components/Sidebar.jsx'
import InvoiceDetail from './pages/InvoiceDeatil/index.jsx'
import NotFound from './pages/NotFoud/NotFound.jsx'

const SignedUser = () => (
  <div className="App font-spartan flex h-screen w-screen bg-gray-100 font-medium">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/invoice/:id" element={<InvoiceDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
)
export default SignedUser
