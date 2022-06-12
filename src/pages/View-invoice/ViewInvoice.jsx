import React from 'react'
import {NavLink, useParams} from 'react-router-dom'
import GoBackImage from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'
import Spartan500Woff from '../../fonts/league-spartan-v5-latin-500.woff'
import Spartan500Woff2 from '../../fonts/league-spartan-v5-latin-500.woff2'
import Spartan700Woff from '../../fonts/league-spartan-v5-latin-700.woff'
import Spartan700Woff2 from '../../fonts/league-spartan-v5-latin-700.woff2'
import Database from '../../data.json'

function ViewInvoice() {
  const params = useParams()
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
  // eslint-disable-next-line no-console
  console.log(params)
  return (
    <div className="mx-auto max-w-[45.625rem] w-full">
      <NavLink
        to={'/'}
        className="flex justify-between items-center max-w-[5.063rem] w-full mb-8"
      >
        <img src={GoBackImage} alt="Go back" />
        <p className={`${Spartan700Woff}`}>Go back</p>
      </NavLink>
      <div className="py-6 px-5 bg-white shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)] rounded-lg mb-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-between w-[9.938rem]">
            <div className="flex items-center justify-between w-[9.938rem]">
              <div>
                <p className={`${Spartan500Woff} ${Spartan500Woff2}`}>Status</p>
              </div>
              <div>
                <p className={`${Spartan700Woff} ${Spartan700Woff2}`}>
                  Pending
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-[19.313rem]">
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
      <div className="bg-white shadow-[0_10px_10px_-10px_rgba(72,84,159,0.100397)] rounded-lg py-12">
        <div className="mx-auto max-w-[39.625rem] w-full">
          <div className="flex items-start justify-between mb-[1.313rem]">
            <div>
              <h4 className="full font-bold text-base">
                <span className="text-gray-400">#</span>
                {dataId}
              </h4>
              <p className="text-xs font-medium">Graphic Design</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-body-2 text-gray-400 font-medium">
                {senderAddressStreet}
              </span>
              <span className="text-body-2 text-gray-400 font-medium">
                {senderAddressCity}
              </span>
              <span className="text-body-2 text-gray-400 font-medium">
                {senderAddressPostcode}
              </span>
              <span className="text-body-2 text-gray-400 font-medium">
                {senderAddressCountry}
              </span>
            </div>
          </div>
          <ul className="flex justify-between mb-[2.813rem]">
            <li className="flex flex-col justify-between">
              <div>
                <h6 className="text-body-1 text-gray-400 font-medium">
                  Invoice Date
                </h6>
                <p className="font-bold text-base text-gray-600">
                  {senderInvoiceDate}
                </p>
              </div>
              <div className="">
                <h6 className="text-body-1 text-gray-400 font-medium">
                  Payment Due
                </h6>
                <p className="font-bold text-base text-gray-600">
                  {senderPaymentDue}
                </p>
              </div>
            </li>
            <li>
              <div>
                <h6 className="text-body-1 text-gray-400 font-medium">
                  Bill To
                </h6>
                <p className="font-bold text-base text-gray-600">
                  {clientName}
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-body-2 text-gray-400 font-medium">
                  {clientAddressStreet}
                </span>
                <span className="text-body-2 text-gray-400 font-medium">
                  {clientAddressCity}
                </span>
                <span className="text-body-2 text-gray-400 font-medium">
                  {clientAddressPostcode}
                </span>
                <span className="text-body-2 text-gray-400 font-medium">
                  {clientAddressCountry}
                </span>
              </div>
            </li>
            <li>
              <h6 className="text-body-1 text-gray-400 font-medium">Sent to</h6>
              <p className="font-bold text-base text-gray-600">{clientEmail}</p>
            </li>
          </ul>
          <div className="w-full rounded-t-lg rounded-r-lg">
            <div className="bg-[#F9FAFE] rounded-t-lg">
              <div className="pt-8 mx-auto max-w-[35.625rem]">
                <table className="w-full">
                  <thead className="">
                    <tr className="text-left">
                      <th className="text-left pb-8 text-body-2 text-gray-400 font-medium">
                        Item Name
                      </th>
                      <th className="text-center pb-8 text-body-2 text-gray-400 font-medium">
                        QTY.
                      </th>
                      <th className="text-right pb-8 text-body-2 text-gray-400 font-medium">
                        Price
                      </th>
                      <th className="text-right pb-8 text-body-2 text-gray-400 font-medium">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pb-8 text-xs text-gray-600 font-bold">
                        {itemName}
                      </td>
                      <td className="text-center pb-8 text-xs text-gray-400 font-bold">
                        {itemQuantity}
                      </td>
                      <td className="text-right pb-8 text-xs text-gray-400 font-bold">
                        {itemPrice}
                      </td>
                      <td className="text-right pb-8 text-xs text-gray-600 font-bold">
                        {itemTotal}
                      </td>
                    </tr>
                    <tr>
                      <td className="pb-8 text-xs text-gray-600 font-bold">
                        Email Design
                      </td>
                      <td className="text-center pb-8 text-xs text-gray-400 font-bold">
                        2
                      </td>
                      <td className="text-right pb-8 text-xs text-gray-400 font-bold">
                        £ 200.00
                      </td>
                      <td className="text-right pb-8 text-xs text-gray-600 font-bold">
                        £ 400.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-[#373B53] rounded-b-lg py-6">
              <div className="flex items-center justify-between max-w-[35.625rem] mx-auto">
                <div>
                  <p className="font-medium text-body-2 text-white">
                    Amount Due
                  </p>
                </div>
                <div>
                  <p className="font-bold text-lg text-white">£ 556.00</p>
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
