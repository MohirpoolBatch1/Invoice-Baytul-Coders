import React, {useEffect, useState} from 'react'
// import { Link } from "react-router-dom";

const InvoiceItem = props => {
  const [statusColor, setStatusColor] = useState(() => ({
    backgroundColor: 'bg-[rgba(255,143,0,.06)]',
    textColor: 'text-[#FF8F00]',
    backgroundColor2: 'bg-[#FF8F00]',
  }))
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

  useEffect(() => {
    switch (props.status) {
      case 'paid':
        setStatusColor({
          backgroundColor: 'bg-[rgba(51,215,160,.06)]',
          textColor: 'text-[#33D69F]',
          backgroundColor2: 'bg-[#33D69F]',
        })
        break
      case 'pending':
        setStatusColor({
          backgroundColor: 'bg-[rgba(255,143,0,.06)]',
          textColor: 'text-[#FF8F00]',
          backgroundColor2: 'bg-[#FF8F00]',
        })
        break
      default:
        setStatusColor({
          backgroundColor: 'bg-[rgba(55,59,83,.06)]',
          textColor: 'text-[#373B53]',
          backgroundColor2: 'bg-[#373B53]',
        })
        break
    }
  }, [props.status])

  return (
    // <Link
    <div
      // to={`/invoice-details/${props.id}`}
      className="grid grid-cols-[min-content_repeat(4,1fr)_min-content] gap-x-8 items-center bg-white rounded-lg px-5 py-2 shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.100397)]"
    >
      <p className="text-body-1 font-bold">
        <span className="text-gray-300">#</span>RT3080
      </p>
      <p className="text-body-1 text-gray-300">Due {formatedDate}</p>
      <p className="text-body-1 text-gray-300">{props.name}</p>
      <h3 className="font-bold justify-self-end">{totalAmount}</h3>
      <div
        className={`px-6 py-3 text-center rounded-md flex items-center justify-center gap-1 ${statusColor.backgroundColor} ${statusColor.textColor} `}
      >
        <span
          className={`w-2 h-2 rounded-full ${statusColor.backgroundColor2}`}
        >
          &nbsp;
        </span>
        <p className="text-xs leading-[0] font-bold capitalize">
          {props.status}
        </p>
      </div>
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
    // </Link>
  )
}

export default InvoiceItem
