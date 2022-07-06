import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
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
} from './Constans'

const InvoiceItem = props => {
  const [statusColor, setStatusColor] = useState(() => ({
    backgroundColor: bgDraft,
    textColor: textDraft,
    circleColor: circleDraft,
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
    <Link
      to={`/invoice/${props.id}`}
      className="my-2 grid grid-cols-[min-content_repeat(4,1fr)_min-content] items-center gap-x-8 rounded-lg bg-white px-5 py-2 shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.100397)]"
    >
      <div className="text-body-1 font-bold">
        <span className="text-gray-300">#</span>
        {props.id}
      </div>
      <p className="text-body-1 text-gray-300">Due {formatedDate}</p>
      <p className="text-body-1 text-gray-300">{props.name}</p>
      <h3 className="justify-self-end font-bold">{totalAmount}</h3>
      <div
        className={`flex items-center justify-center gap-1 rounded-md px-6 py-3 text-center ${statusColor.backgroundColor} ${statusColor.textColor} `}
      >
        <span className={`h-2 w-2 rounded-full ${statusColor.circleColor}`}>
          &nbsp;
        </span>
        <p className="text-xs font-bold capitalize leading-[0]">
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
    </Link>
  )
}

export default InvoiceItem
