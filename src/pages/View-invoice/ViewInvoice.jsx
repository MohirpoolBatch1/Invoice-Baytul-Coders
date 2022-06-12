import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import GoBackImage from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'
import Database from '../../data.json'
import {
  bgPaid,
  bgPending,
  bgDraft,
  circleDraft,
  circlePaid,
  circlePending,
  textDraft,
  textPaid,
  textPending,
} from '../../components/InvoiceItem/Constans'

function ViewInvoice(props) {
  const datas = Database.map(data => data)
  const dataFirst = datas[0]

  const dataId = dataFirst.id

  const senderAddressCity = dataFirst.senderAddress.city
  const senderAddressCountry = dataFirst.senderAddress.country
  const senderAddressPostcode = dataFirst.senderAddress.postCode
  const senderAddressStreet = dataFirst.senderAddress.street
  const senderInvoiceDate = dataFirst.createdAt
  const senderPaymentDue = dataFirst.paymentDue

  const clientAddressCity = dataFirst.clientAddress.city
  const clientAddressCountry = dataFirst.clientAddress.country
  const clientAddressPostcode = dataFirst.clientAddress.postCode
  const clientAddressStreet = dataFirst.clientAddress.street
  const [...clientName] = dataFirst.clientName
  const [...clientEmail] = dataFirst.clientEmail

  const itemName = dataFirst.items.map(item => item.name)
  const itemQuantity = dataFirst.items.map(item => item.quantity)
  const itemPrice = dataFirst.items.map(item => item.price)
  const itemTotal = dataFirst.items.map(item => item.total)

  const [statusColor, setStatusColor] = useState(() => ({
    backgroundColor: bgDraft,
    textColor: textDraft,
    circleColor: circleDraft,
  }))

  useEffect(() => {
    switch (props.status) {
      case 'paid':
        setStatusColor({
          backgroundColor: bgPaid,
          textColor: textPaid,
          circleColor: circlePaid,
        })
        break
      case 'pending':
        setStatusColor({
          backgroundColor: bgPending,
          textColor: textPending,
          circleColor: circlePending,
        })
        break
      default:
        setStatusColor({
          backgroundColor: bgDraft,
          textColor: textDraft,
          circleColor: circleDraft,
        })
        break
    }
  }, [props.status])

  return (
    <div className="mx-auto w-full max-w-[45.625rem]">
      <NavLink
        to={'/'}
        className="mb-8 flex w-full max-w-[5.063rem] items-center justify-between"
      >
        <img src={GoBackImage} alt="Go back" />
        <p className="text-body-1 font-bold">Go back</p>
      </NavLink>
      <div className="mb-6 rounded-lg bg-white py-6 px-5 shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)]">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-[9.938rem] justify-between">
            <div className="flex w-[9.938rem] items-center justify-between">
              <div>
                <p className="full text-body-1 font-medium text-gray-400">
                  Status
                </p>
              </div>
              <div
                className={`flex items-center justify-center gap-1 rounded-md px-6 py-3 text-center ${statusColor.backgroundColor} ${statusColor.textColor} `}
              >
                <span
                  className={`h-2 w-2 rounded-full ${statusColor.circleColor}`}
                >
                  &nbsp;
                </span>
                <p className="text-xs font-bold capitalize leading-[0]">
                  {props.status}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex w-[19.313rem] items-center justify-between">
              <Button
                buttonKind="edit"
                className="w-[4.563rem] bg-[#f9fafe] hover:bg-gray-200 hover:text-gray-400"
              >
                Edit
              </Button>
              <Button buttonKind="danger" className="w-[5.563rem]">
                Delete
              </Button>
              <Button buttonKind="primary" className="w-[8.188rem]">
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
              <h4 className="full text-base font-bold">
                <span className="text-gray-400">#</span>
                {dataId}
              </h4>
              <p className="text-xs font-medium">Graphic Design</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-body-2 font-medium text-gray-400">
                {senderAddressStreet}
              </span>
              <span className="text-body-2 font-medium text-gray-400">
                {senderAddressCity}
              </span>
              <span className="text-body-2 font-medium text-gray-400">
                {senderAddressPostcode}
              </span>
              <span className="text-body-2 font-medium text-gray-400">
                {senderAddressCountry}
              </span>
            </div>
          </div>
          <ul className="mb-[2.813rem] flex justify-between">
            <li className="flex flex-col justify-between">
              <div>
                <h6 className="text-body-1 font-medium text-gray-400">
                  Invoice Date
                </h6>
                <p className="text-base font-bold text-gray-600">
                  {senderInvoiceDate}
                </p>
              </div>
              <div className="">
                <h6 className="text-body-1 font-medium text-gray-400">
                  Payment Due
                </h6>
                <p className="text-base font-bold text-gray-600">
                  {senderPaymentDue}
                </p>
              </div>
            </li>
            <li>
              <div>
                <h6 className="text-body-1 font-medium text-gray-400">
                  Bill To
                </h6>
                <p className="text-base font-bold text-gray-600">
                  {clientName}
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-body-2 font-medium text-gray-400">
                  {clientAddressStreet}
                </span>
                <span className="text-body-2 font-medium text-gray-400">
                  {clientAddressCity}
                </span>
                <span className="text-body-2 font-medium text-gray-400">
                  {clientAddressPostcode}
                </span>
                <span className="text-body-2 font-medium text-gray-400">
                  {clientAddressCountry}
                </span>
              </div>
            </li>
            <li>
              <h6 className="text-body-1 font-medium text-gray-400">Sent to</h6>
              <p className="text-base font-bold text-gray-600">{clientEmail}</p>
            </li>
          </ul>
          <div className="w-full rounded-t-lg rounded-r-lg">
            <div className="rounded-t-lg bg-[#F9FAFE]">
              <div className="mx-auto max-w-[35.625rem] pt-8">
                <table className="w-full">
                  <thead className="">
                    <tr className="text-left">
                      <th className="pb-8 text-left text-body-2 font-medium text-gray-400">
                        Item Name
                      </th>
                      <th className="pb-8 text-center text-body-2 font-medium text-gray-400">
                        QTY.
                      </th>
                      <th className="pb-8 text-right text-body-2 font-medium text-gray-400">
                        Price
                      </th>
                      <th className="pb-8 text-right text-body-2 font-medium text-gray-400">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pb-8 text-xs font-bold text-gray-600">
                        {itemName}
                      </td>
                      <td className="pb-8 text-center text-xs font-bold text-gray-400">
                        {itemQuantity}
                      </td>
                      <td className="pb-8 text-right text-xs font-bold text-gray-400">
                        <span>£ </span>
                        {itemPrice}
                      </td>
                      <td className="pb-8 text-right text-xs font-bold text-gray-600">
                        <span>£ </span>
                        {itemTotal}
                      </td>
                    </tr>
                    <tr>
                      <td className="pb-8 text-xs font-bold text-gray-600">
                        Email Design
                      </td>
                      <td className="pb-8 text-center text-xs font-bold text-gray-400">
                        2
                      </td>
                      <td className="pb-8 text-right text-xs font-bold text-gray-400">
                        £ 200.00
                      </td>
                      <td className="pb-8 text-right text-xs font-bold text-gray-600">
                        £ 400.00
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                  <p className="text-lg font-bold text-white">£ 556.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewInvoice
