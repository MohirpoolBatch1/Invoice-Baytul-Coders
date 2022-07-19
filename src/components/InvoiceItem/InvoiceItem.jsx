import React from 'react'
import {Link} from 'react-router-dom'
import DefineStatus from '../Status/DefineStatus.jsx'

const InvoiceItem = props => {
  const totalAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  }).format(props.totalAmount)

  const rawDate = new Date(props.dueDate)
  const formatedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(rawDate)

  return (
    <Link
      to={`/invoice/${props.id}`}
      className="grid grid-cols-[min-content_repeat(4,1fr)_min-content] gap-x-8 items-center bg-white rounded-lg px-5 py-2 shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.100397)]"
    >
      <p className="text-body-1 font-bold">
        <span className="text-gray-300">#</span>RT3080
      </p>
      <p className="text-body-1 text-gray-300">Due {formatedDate}</p>
      <p className="text-body-1 text-gray-300">{props.name}</p>
      <h3 className="font-bold justify-self-end">{totalAmount}</h3>
      <DefineStatus status={props.status} />
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </Link>
  )
}

export default InvoiceItem
