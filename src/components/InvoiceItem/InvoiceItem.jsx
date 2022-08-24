import React from 'react'
import {Link} from 'react-router-dom'
import DefineStatus from '../Status/DefineStatus.jsx'
import {prettyCurrency, prettyLocaleDate} from '../../pages/InvoiceDetail/utils'
import {Context as ThemeContext} from '../../context/theme.jsx'

const InvoiceItem = props => {
  const totalAmount = prettyCurrency(props.totalAmount)

  const formatedDate = prettyLocaleDate(props.dueDate)

  const {theme} = React.useContext(ThemeContext)

  return (
    <Link
      to={`/invoice/${props.id}`}
      className={`my-2 grid grid-cols-[min-content_repeat(4,1fr)_min-content] items-center gap-x-8 rounded-lg px-5 py-2 ${
        theme ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div
        className={`text-body-1 font-bold ${
          theme ? 'text-white' : 'text-gray-600'
        }`}
      >
        <span className="text-gray-300">#</span>
        {props.id}
      </div>
      <p className="text-body-1 text-gray-300">Due {formatedDate}</p>
      <p className={`text-body-1 ${theme ? 'text-white' : 'text-gray-300'}`}>
        {props.name}
      </p>
      <h3
        className={`justify-self-end font-bold ${
          theme ? 'text-white' : 'text-gray-600'
        }`}
      >
        {totalAmount}
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
}

export default InvoiceItem
