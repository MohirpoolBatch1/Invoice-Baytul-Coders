import React, {useState} from 'react'
import EmptyPage from './EmptyPage.jsx'
import InvoiceNavbar from './InvoiceNavbar.jsx'

const Homepage = () => {
  const [invoices, setInvoices] = useState([])
  return (
    <div className="mx-auto max-w-3xl px-6">
      <InvoiceNavbar invoices={invoices} />
      {invoices && invoices.length > 0 ? (
        <div className="text-center">Invoices list</div>
      ) : (
        <EmptyPage />
      )}
    </div>
  )
}

export default Homepage
