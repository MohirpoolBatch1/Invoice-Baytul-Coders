import React, {Fragment} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import uniqueId from 'lodash/uniqueId'
import arrowDown from '../../assets/icon-arrow-down.svg'
import {netDays} from './constants'

const FormDropdown = React.memo(
  ({labelContent, selected, setSelected, ...props}) => (
    <div className="sm:mb-0 relative w-full flex-grow">
      <label htmlFor="" className="text-xs text-gray-400">
        {labelContent}
      </label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative flex w-full cursor-default items-center justify-between rounded border border-gray-200 bg-white py-2 px-3 text-left  text-xs focus:outline-none focus-visible:border-purple">
            <span className="text-sm block truncate">
              Net {selected.day} day
            </span>
            <img src={arrowDown} alt="Options" className="cursor-pointer" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-3 max-h-60 w-full overflow-auto rounded border-none bg-white py-1 text-xs shadow-lg">
              {netDays.map((days, daysIndex, array) => (
                <Listbox.Option
                  key={uniqueId('DAY_')}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 
                    ${active ? 'text-purple' : 'text-gray-600'}
                   ${daysIndex === array.length - 1 ? '' : 'border-b-[1px]'}
                    `
                  }
                  value={days}
                >
                  <span className="block truncate font-medium">
                    Net {days.day} day
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  ),
)

export default FormDropdown
