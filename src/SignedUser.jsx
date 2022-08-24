import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import Sidebar from './components/Sidebar.jsx'
import InvoiceDetail from './pages/InvoiceDeatil/InvoiceDetail.jsx'
import NotFound from './pages/NotFoud/NotFound.jsx'
import {Context as ThemeContext} from './context/theme.jsx'

function SignedUser() {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div
      className={`App font-spartan flex h-screen w-screen ${
        theme ? 'bg-gray-700' : 'bg-gray-100'
      } font-medium`}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
>>>>>>> 204f848 (feat(SSP-56): Finished theme-changing-functionality UI)
export default SignedUser
