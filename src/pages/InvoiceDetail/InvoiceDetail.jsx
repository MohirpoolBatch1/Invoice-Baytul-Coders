import React, {useState} from 'react'
import {uniqueId} from 'lodash'
import {Link} from 'react-router-dom'
import iconArrowLeft from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'
import DefineStatus from '../../components/Status/DefineStatus.jsx'
import DeletionModal from '../../components/Modal/index.jsx'
import {prettyCurrency, prettyLocaleDate} from '../../utils/utils'
import ItemsInfo from '../../components/ItemsInfo/ItemsInfo.jsx'
import {invoice} from './mock'

function InvoiceDetail() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="mx-auto flex w-full max-w-[45.625rem] items-center justify-center pt-16">
      <div className="w-full pt-16 pb-14">
        <Link
          to={'/'}
          className="mb-8 flex w-full max-w-[5.063rem] items-center justify-between"
        >
          <img src={iconArrowLeft} alt="Go back" />
          <p className="font-spartan text-body-1 font-bold tracking-[-0.0156rem]">
            Go back
          </p>
        </Link>
        <div className="mb-6 overflow-y-auto rounded-lg bg-white py-3 px-5 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)]">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-[9.938rem] justify-between">
              <div className="flex w-[9.938rem] items-center justify-between">
                <div>
                  <p className="full text-body-1 font-medium tracking-[-0.0156rem] text-gray-400">
                    Status
                  </p>
                </div>
                <DefineStatus status={invoice.status} />
              </div>
            </div>
            <div>
              <div className="flex w-[19.313rem] items-center justify-between">
                <Button
                  buttonKind="edit"
                  className="bg-[#f9fafe] py-4 px-7 hover:bg-gray-200 hover:text-gray-400"
                >
                  Edit
                </Button>
                <Button
                  buttonKind="danger"
                  className="py-4 px-7 hover:bg-red-light hover:text-white"
                  onClick={() => setOpenModal(true)}
                >
                  Delete
                </Button>
                <Button
                  buttonKind="primary"
                  className="py-4 px-8 hover:bg-purple-light hover:text-white"
                >
                  Mark as Paid
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white py-12 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)]">
          <div className="mx-auto w-full max-w-[39.625rem]">
            <div className="mb-[1.313rem] flex items-start justify-between">
              <div>
                <h4 className="full mb-2 text-base font-bold">
                  <span className="text-gray-400">#</span>
                  {invoice.id}
                </h4>
                <p className="text-xs font-medium text-gray-400">
                  Graphic Design
                </p>
              </div>
              <p className="text-right text-body-2 font-medium text-gray-400">
                {invoice.senderAddress.street} <br />
                {invoice.senderAddress.city} <br />
                {invoice.senderAddress.postCode} <br />
                {invoice.senderAddress.country} <br />
              </p>
            </div>
            <div className="mb-[2.813rem] flex justify-between">
              <div className="flex flex-col justify-between">
                <div>
                  <h6 className="mb-3 text-body-1 font-medium text-gray-400">
                    Invoice Date
                  </h6>
                  <p className="text-base font-bold text-gray-600">
                    {prettyLocaleDate(invoice.createdAt)}
                  </p>
                </div>
                <div className="">
                  <h6 className="mb-3 text-body-1 font-medium text-gray-400">
                    Payment Due
                  </h6>
                  <p className="text-base font-bold text-gray-600">
                    {prettyLocaleDate(invoice.paymentDue)}
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <h6 className="mb-3 text-body-1 font-medium text-gray-400">
                    Bill To
                  </h6>
                  <p className="text-base font-bold text-gray-600">
                    {invoice.clientName}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-body-2 font-medium text-gray-400">
                    {invoice.clientAddress.street} <br />
                    {invoice.clientAddress.city} <br />
                    {invoice.clientAddress.postCode} <br />
                    {invoice.clientAddress.country}
                  </p>
                </div>
              </div>
              <div>
                <h6 className="text-body-1 font-medium text-gray-400">
                  Sent to
                </h6>
                <p className="text-base font-bold text-gray-600">
                  {invoice.clientEmail}
                </p>
              </div>
            </div>
            <div className="w-full rounded-t-lg rounded-r-lg">
              <div className="rounded-t-lg bg-[#F9FAFE]">
                <div className="mx-auto max-w-[35.625rem] pt-8">
                  <div className="justify-space-between flex w-full">
                    <p className="w-full max-w-[17.875rem] pb-8 text-left text-body-2 font-medium text-gray-400">
                      Item Name
                    </p>
                    <p className="w-full max-w-[1.875rem] pb-8 text-center text-body-2 font-medium text-gray-400">
                      QTY.
                    </p>
                    <p className="w-full max-w-[7.375rem] pb-8 text-right text-body-2 font-medium text-gray-400">
                      Price
                    </p>
                    <p className="w-full max-w-[8.563rem] pb-8 text-right text-body-2 font-medium text-gray-400">
                      Total
                    </p>
                  </div>
                  <ul key={uniqueId('ITEM_')} className="flex flex-col">
                    {invoice.items.map(item => (
                      <ItemsInfo {...item} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-b-lg bg-[#373B53] py-6">
                <div className="mx-auto flex max-w-[35.625rem] items-center justify-between">
                  <div>
                    <p className="text-body-2 font-medium text-white">
                      Amount Due
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">
                      {prettyCurrency(invoice.total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
