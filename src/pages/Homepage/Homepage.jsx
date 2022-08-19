import React, {useEffect, useState} from 'react'
import {uniqueId} from 'lodash'
import EmptyPage from './EmptyPage.jsx'
import InvoiceNavbar from './InvoiceNavbar.jsx'
import InvoiceItem from '../../components/InvoiceItem/InvoiceItem.jsx'
import FormWindow from '../../components/FormWindow/index.jsx'
import {useGetAllInvoicesQuery} from '../../app/invoiceApi'
import Spinner from '../../components/Spinner/Spinner.jsx'

const InvoiceItems = props => (
  <div>
    {props.invoices?.map(item => (
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
  const [isOpenForm, setIsOpenForm] = useState(false)
  const {data, isLoading, error, isSuccess} = useGetAllInvoicesQuery()
  const [statuses, setStatuses] = useState({
    paid: false,
    pending: false,
    draft: false,
  })
  const [invoices, setInvoices] = useState(data)

  const changeHandler = e => {
    setStatuses({
      ...statuses,
      [e.target.name]: e.target.checked,
    })
  }

  useEffect(() => {
    const filteredInvoices = data?.filter(item => statuses[item.status])
    setInvoices(filteredInvoices?.length > 0 ? filteredInvoices : data)
  }, [statuses, data])

  return (
    <>
      <div className="mx-auto w-full max-w-[45.6rem] overflow-y-auto px-6">
        <InvoiceNavbar
          amountInvoices={invoices?.length}
          statuses={statuses}
          changeHandler={changeHandler}
          openForm={() => setIsOpenForm(true)}
        />
        {error && <h3 className="text-center text-red">{error}</h3>}
        {invoices?.length > 0 ? (
          <InvoiceItems invoices={invoices} />
        ) : (
          isSuccess && <EmptyPage />
        )}
      </div>
      <FormWindow
        closeForm={() => setIsOpenForm(false)}
        isOpenForm={isOpenForm}
      />
      {isLoading && <Spinner />}
    </>
  )
}

export default Homepage
