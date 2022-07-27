import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import InvoiceDetail from './pages/InvoiceDetail/InvoiceDetail.jsx'

const SignedUser = () => (
  <div className="App font-spartan flex h-screen w-screen bg-gray-100 font-medium">
    <Sidebar />
    <InvoiceDetail />
  </div>
)
export default SignedUser
