import React, {useState} from 'react'
import EmptyPage from './EmptyPage.jsx'
import InvoiceNavbar from './InvoiceNavbar.jsx'

const Homepage = () => {
  // eslint-disable-next-line no-unused-vars
  const [invoices, setInvoices] = useState([1, 3, 2, 1])
  return (
    <div className="mx-auto max-w-3xl px-6">
      <InvoiceNavbar amountInvoices={invoices.length} />
      {invoices?.length > 0 ? (
        <div className="text-center">Invoices list</div>
      ) : (
        <EmptyPage />
      )}
    </div>
  )
}

export default Homepage
