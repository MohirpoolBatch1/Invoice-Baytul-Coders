import React from 'react'
import {Link} from 'react-router-dom'
import DefineStatus from '../Status/DefineStatus.jsx'
import {prettyCurrency, prettyLocaleDate} from '../../pages/InvoiceDetail/utils'

const InvoiceItem = props => (
  <Link
    to={`/invoice/${props.id}`}
    className="my-2 grid grid-cols-[min-content_repeat(4,1fr)_min-content] items-center gap-x-8 rounded-lg bg-white px-5 py-2 shadow-[0px_10px_10px_-10px_rgba(72,84,159,0.100397)]"
  >
    <div className="text-body-1 font-bold">
      <span className="text-gray-300">#</span>
      {props.id.toUpperCase()}
    </div>
    <p className="text-body-1 text-gray-300">
      Due {prettyLocaleDate(props.dueDate)}
    </p>
    <p className="text-body-1 text-gray-300">{props.name}</p>
    <h3 className="justify-self-end font-bold">
      {prettyCurrency(props.totalAmount)}
    </h3>
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

export default InvoiceItem
