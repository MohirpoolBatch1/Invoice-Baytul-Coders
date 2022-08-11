import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormDatePicker = React.memo(
  ({labelContent, paymentDue, handleChange, currentDate, ...props}) => (
    <div className="sm:mb-0 relative w-full flex-grow">
      <label className="text-xs text-gray-400">{labelContent}</label>
      <DatePicker
        selected={currentDate || paymentDue}
        onChange={handleChange}
        dateFormat="d MMM yyyy"
        className="w-full rounded border border-gray-200 py-2 px-3 text-xs text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-purple-light"
      />
    </div>
  ),
)
export default FormDatePicker
