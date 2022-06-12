import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Button from './components/Button/Button.jsx'
import ViewInvoice from './pages/View-invoice/ViewInvoice.jsx'
import Sidebar from './components/Sidebar.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
// import InvoiceItem from './components/InvoiceItem/InvoiceItem.jsx'

const SignedUser = () => (
  <div className="App font-spartan font-medium h-screen w-screen flex items-center bg-gray-100">
    <Sidebar />
    {/* <Button buttonKind="danger">New Invoice</Button> */}
    <ViewInvoice />
    {/* {DUMMY.map(el => (
      <InvoiceItem
        key={el.id}
        id={el.id}
        status={el.status}
        name={el.clientName}
        totalAmount={el.total}
        dueDate={el.paymentDue}
      />
    ))} */}
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/invoice/:id" element={<ViewInvoice />} /> */}
    </Routes>
  </div>
)
export default SignedUser
