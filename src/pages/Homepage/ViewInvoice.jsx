import React from 'react'
import {useParams} from 'react-router'
import {useGetSingleInvoiceQuery} from '../../app/apiSlice'

const ViewInvoice = () => {
  const {invoiceId: id} = useParams()
  const {
    data: invoice,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSingleInvoiceQuery({id})

  let content
  // Define conditional content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = JSON.stringify(invoice)
  } else if (isError) {
    content = <p>{error}</p>
  }
  return <div>{content}</div>
}

export default ViewInvoice
