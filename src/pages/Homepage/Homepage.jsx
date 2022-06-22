import React, {useState} from 'react'
import {uniqueId} from 'lodash'
import EmptyPage from './EmptyPage.jsx'
import InvoiceNavbar from './InvoiceNavbar.jsx'
import items from '../../data.json'
import InvoiceItem from '../../components/InvoiceItem/InvoiceItem.jsx'

const InvoiceItems = props => (
  <div>
    {props.invoiceItems.map(item => (
      <InvoiceItem
        key={uniqueId('ITEM_')}
        id={item.id}
        totalAmount={item.total}
        dueDate={item.paymentDue}
        name={item.clientName}
        status={item.status}
      />
    ))}
  </div>
)

const Homepage = () => {
  const [invoiceItems, setInvoiceItems] = useState(items)

  return (
    <div className="mx-auto min-w-[45.6rem] px-6">
      <InvoiceNavbar amountInvoices={invoiceItems.length} />
      {items.length !== 0 ? (
        <InvoiceItems invoiceItems={invoiceItems} />
      ) : (
        <EmptyPage />
      )}
    </div>
  )
}

export default Homepage
