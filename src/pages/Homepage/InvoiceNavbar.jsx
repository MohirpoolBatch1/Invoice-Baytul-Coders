import React, {useState, useEffect} from 'react'
import IconArrowDown from '../../assets/icon-arrow-down.svg'
import Button from '../../components/Button/Button.jsx'
import {Context as ThemeContext} from '../../context/theme.jsx'

const InvoiceNavbar = ({amountInvoices, statuses, changeHandler, openForm}) => {
  const [showFilter, setShowFilter] = useState(false)
  const {theme} = React.useContext(ThemeContext)

  useEffect(() => {
    const handleEvent = e => {
      if (
        !e.target.closest('.filter-status-dropdown') &&
        e.target.id !== 'filterBtn'
      ) {
        setShowFilter(false)
      }
    }
    document.addEventListener('click', handleEvent, true)
  }, [])

  return (
    <div className="flex items-center justify-between py-16">
      <div>
<<<<<<< HEAD
        <h1 className="text-xl font-bold text-gray-600">Invoices</h1>
        <p className="text-xs font-normal text-gray-300">
          {amountInvoices > 0
            ? `There are ${amountInvoices} total invoices`
            : 'No invoices'}
        </p>
=======
        <h1
          className={`text-xl font-bold ${
            theme ? 'text-white' : 'text-gray-600'
          }`}
        >
          Invoices
        </h1>
        <p className="text-xs font-normal text-gray-300">{amountInvoices}</p>
>>>>>>> 204f848 (feat(SSP-56): Finished theme-changing-functionality UI)
      </div>

      <div className="relative flex space-x-4">
        <button
          id="filterBtn"
          onClick={() => {
            setShowFilter(!showFilter)
          }}
          className={`text-xs font-bold ${
            theme ? 'text-white' : 'text-gray-600'
          }`}
        >
          Filter{' '}
          <span className="pointer-events-none hidden tablet:inline">
            {' '}
            by status
          </span>
          <span className="pointer-events-none ml-2">
            <img
              className={`${showFilter && 'rotate-180'} inline transition`}
              src={IconArrowDown}
              alt="icon arrow down"
            />
          </span>
        </button>
        <Button
          onClick={openForm}
          buttonKind="primary-add"
          className={'px-4 py-2'}
        >
          New <span className="ml-2 hidden tablet:inline"> Invoice</span>
        </Button>
        <div
          className={`${
            !showFilter && 'hidden'
          } filter-status-dropdown absolute top-12 -left-10 w-40 space-y-3 rounded-lg p-5 shadow-lg ${
            theme ? 'bg-gray-500' : 'bg-white'
          }`}
        >
          {['draft', 'pending', 'paid'].map(item => (
            <label
              key={item}
              htmlFor={item}
              className={`flex cursor-pointer items-center space-x-3 text-xs font-bold capitalize ${
                theme ? 'text-white' : 'text-gray-600'
              }`}
            >
              <input
                className={`rounded border-none text-purple hover:ring-1 focus:ring-1 focus:ring-purple-light ${
                  theme ? 'bg-gray-800' : 'bg-gray-200'
                }`}
                type="checkbox"
                checked={statuses[item]}
                value={item}
                name={item}
                id={item}
                onChange={changeHandler}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvoiceNavbar
