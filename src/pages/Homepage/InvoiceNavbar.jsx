import React, {useState} from 'react'
import IconArrowDown from '../../assets/icon-arrow-down.svg'

const InvoiceNavbar = ({invoices}) => {
  const [showFilter, setShowFilter] = useState(true)
  return (
    <div className="flex items-center justify-between py-16">
      <div>
        <h1 className="text-xl font-bold text-gray-600">Invoices</h1>
        <p className="text-xs font-normal text-gray-300">
          {invoices && invoices.length > 0
            ? `There are ${invoices.length} total invoices`
            : 'No invoices'}
        </p>
      </div>
      <div className="relative">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="text-xs font-bold text-gray-600"
        >
          Filter <span className="hidden tablet:inline"> by status</span>
          <span className="ml-2">
            <img
              className={`${!showFilter && 'rotate-180'} inline transition`}
              src={IconArrowDown}
              alt="icon arrow down"
            />
          </span>
        </button>

        {/* temporarily button */}
        <button className="ml-4 h-12 w-24 rounded-full bg-purple p-2 text-xs font-bold text-white transition hover:bg-purple-light tablet:ml-8 tablet:w-[150px]">
          New <span className="hidden tablet:inline">Invoice</span>
        </button>
        <div
          className={`${
            showFilter && 'hidden'
          } absolute -left-8 w-40 space-y-3 rounded-lg bg-white p-5 shadow-lg`}
        >
          {['draft', 'panding', 'poid'].map(item => (
            <label
              key={item}
              htmlFor={item}
              className="flex cursor-pointer items-center space-x-3 text-xs font-bold capitalize"
            >
              <input
                className="rounded border-none bg-gray-200 text-purple focus:ring-purple-light"
                type="checkbox"
                value={item}
                name={item}
                id={item}
              />{' '}
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvoiceNavbar
