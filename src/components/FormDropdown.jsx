import React, {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import arrowDown from '../assets/icon-arrow-down.svg'

const netDays = [
  {day: 'Net 1 Day'},
  {day: 'Net 7 Day'},
  {day: 'Net 14 Day'},
  {day: 'Net 30 Day'},
]
const FormDropdown = props => {
  const [selected, setSelected] = useState(netDays[0])

  return (
    <div className="sm:mb-0 relative w-full flex-grow">
      <label htmlFor="" className="text-xs text-gray-400">
        {props.labelContent}
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="flex w-full cursor-default items-center justify-between rounded-lg border border-gray-200 bg-white py-2 px-3 text-left text-xs focus:outline-none focus-visible:border-purple">
            <span className="text-sm block truncate">{selected.day}</span>
            <img src={arrowDown} alt="Options" className="cursor-pointer" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 mt-3 max-h-60 w-full overflow-auto rounded-lg border-none bg-white">
              {netDays.map((days, daysIndex, array) => (
                <Listbox.Option
                  key={daysIndex}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 
                    ${active ? 'text-purple' : 'text-gray-600'}
                   ${daysIndex === array.length - 1 ? '' : 'border-b-[1px]'}
                    `
                  }
                  value={days}
                >
                  <span className="block truncate font-medium">{days.day}</span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default FormDropdown
