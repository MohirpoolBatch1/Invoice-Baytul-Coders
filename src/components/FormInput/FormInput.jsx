import React from 'react'

const FormInput = props => (
  <div className="sm:mb-0 relative w-full flex-grow">
    <label htmlFor={props.inputType} className="text-xs text-gray-400">
      {props.labelContent}
    </label>
    <input
      type={props.inputType}
      className="w-full rounded-lg border border-gray-200 py-2 px-3 text-xs text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-purple-light"
    />
  </div>
)

export default FormInput
