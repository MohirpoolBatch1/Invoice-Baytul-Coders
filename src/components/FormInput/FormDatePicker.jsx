import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormDatePicker = ({labelContent, ...props}) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="sm:mb-0 relative w-full flex-grow">
      <label className="text-xs text-gray-400">{labelContent}</label>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="d MMM yyyy"
        className="w-full rounded-lg border border-gray-200 py-2 px-3 text-xs text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-purple-light"
      />
    </div>
  )
}

export default FormDatePicker
