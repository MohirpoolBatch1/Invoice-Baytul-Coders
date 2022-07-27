import React, {useState} from 'react'
import {uniqueId} from 'lodash'
import {Link} from 'react-router-dom'
import iconArrowLeft from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'
import DefineStatus from '../../components/Status/DefineStatus.jsx'
import DeletionModal from '../../components/Modal/index.jsx'
import {prettyCurrency, prettyLocaleDate} from './utils'
import {invoice} from './mock'

function InvoiceDetail() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="mx-auto w-[45rem] px-6">
      <div className="py-6">
        <Link to="/">
          <img
            src={iconArrowLeft}
            className="mr-4 inline text-purple"
            alt="icon arrow left"
          />
          <span className="font-bold text-gray-600">Go back </span>
        </Link>
      </div>

      <div className="flex w-full items-center justify-between rounded-md bg-white p-5 shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.11)]">
        <div className="flex items-center">
          <span className="mr-4 text-xs text-gray-300">Status</span>
          <DefineStatus status={invoice.status} />
        </div>
        <div className="flex items-center space-x-2">
          <Button buttonKind={'edit'}>edit</Button>
          <Button onClick={() => setOpenModal(true)} buttonKind={'danger'}>
            delete
          </Button>
          <Button buttonKind={'primary'}>mark as paid</Button>
        </div>
      </div>

      <div className="mt-6 rounded-md bg-white p-10 text-xs text-gray-400">
        <div className="flex justify-between">
          <div>
            <h3>
              #
              <span className="text-base font-bold uppercase text-gray-600">
                {invoice.id}
              </span>
            </h3>
            <p>{invoice.description}</p>
          </div>
          <div>
            <p className="text-right">
              {invoice.clientAddress.street} <br />
              {invoice.clientAddress.city} <br />
              {invoice.clientAddress.postCode} <br />
              {invoice.clientAddress.country}
            </p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-3">
          <div>
            <p>Invoice Date</p>
            <h3 className="mt-2 mb-4 font-bold text-gray-600">
              {prettyLocaleDate(invoice.createdAt)}
            </h3>
            <p>Payment Due</p>
            <h3 className="mt-2 font-bold text-gray-600">
              {prettyLocaleDate(invoice.paymentDue)}
            </h3>
          </div>
          <div>
            <p>Bill To</p>
            <h3 className="mt-2 font-bold text-gray-600">
              {invoice.clientName}
            </h3>
            <p>
              {invoice.senderAddress.street} <br />
              {invoice.senderAddress.city} <br />
              {invoice.senderAddress.postCode} <br />
              {invoice.senderAddress.country}
            </p>
          </div>
          <div className="">
            <p>Sent to</p>
            <h3 className="mt-2 font-bold text-gray-600">
              {invoice.clientEmail}
            </h3>
          </div>
        </div>
        <div className="mt-9 space-y-4 rounded-t-md bg-[#F9FAFE] px-8 py-4">
          <div className="flex flex-row text-right">
            <div className="basis-1/4 text-left">Item Name</div>
            <div className="basis-1/4 text-center">QTY.</div>
            <div className="basis-1/4">Price</div>
            <div className="basis-1/4">Total</div>
          </div>
          {invoice.items.map(({name, quantity, price, total}) => (
            <div
              className="flex flex-row text-right font-bold"
              key={uniqueId()}
            >
              <div className="basis-1/4 text-left text-gray-600">{name}</div>
              <div className="basis-1/4 text-center">{quantity}</div>
              <div className="basis-1/4">{prettyCurrency(price)}</div>
              <div className="basis-1/4 text-gray-600">
                {prettyCurrency(total)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between rounded-b-md bg-gray-500 p-6 text-white">
          <p className="text-body-2">Amount Due</p>
          <h2 className="text-bold text-[1.5rem]">
            {prettyCurrency(invoice.total)}
          </h2>
        </div>
      </div>
      <DeletionModal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        invoiceId={invoice.id}
      />
    </div>
  )
}

export default InvoiceDetail
