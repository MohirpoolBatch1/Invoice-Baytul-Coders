import React, {useEffect, useState} from 'react'
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
  const [amountInvoices, setAmountInvoices] = useState(
    items.length ? `There are ${items.length} total invoices` : 'No invoices',
  )
  const [invoiceItems, setInvoiceItems] = useState(items)
  const [statuses, setStatuses] = useState({
    paid: false,
    pending: false,
    draft: false,
  })

  const changeHandler = e => {
    setStatuses({
      ...statuses,
      [e.target.name]: e.target.checked,
    })
  }

  useEffect(() => {
    const filteredInvoices = items.filter(item => statuses[item.status])
    setInvoiceItems(filteredInvoices.length > 0 ? filteredInvoices : items)

    const amount = items.length
      ? `There are ${items.length} total invoices`
      : 'No invoices'

    setAmountInvoices(
      filteredInvoices.length > 0
        ? `There are ${filteredInvoices.length} pending invoices`
        : amount,
    )
  }, [statuses, amountInvoices])

  return (
    <div className="mx-auto w-full max-w-[45.6rem] px-6">
      <InvoiceNavbar
        amountInvoices={amountInvoices}
        statuses={statuses}
        changeHandler={changeHandler}
      />
      {items.length !== 0 ? (
        <InvoiceItems invoiceItems={invoiceItems} />
      ) : (
        <EmptyPage />
      )}
    </div>
  )
}

export default Homepage
