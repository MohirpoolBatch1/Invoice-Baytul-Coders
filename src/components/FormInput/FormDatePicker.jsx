import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormDatePicker = React.memo(
  ({
    labelContent,
    paymentDue,
    handleChange,
    currentDate,
    disabled,
    ...props
  }) => (
    <div className="sm:mb-0 relative w-full flex-grow">
      <label className="text-xs text-gray-400">{labelContent}</label>
      <DatePicker
        disabled={disabled}
        selected={currentDate || paymentDue}
        onChange={handleChange}
        dateFormat="d MMM yyyy"
        className={`${
          disabled ? 'text-gray-300' : 'text-gray-600'
        } w-full rounded border border-gray-200 py-2 px-3 text-xs outline-none transition-colors duration-200 ease-in-out focus:border-purple-light`}
      />
    </div>
  ),
)
export default FormDatePicker
