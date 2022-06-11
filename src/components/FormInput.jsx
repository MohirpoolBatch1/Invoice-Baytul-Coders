import React from 'react'

const FormInput = props => {
  const input = props.inputType

  return (
    <div className="relative sm:mb-0 flex-grow w-full">
      <label htmlFor={props.inputType} className="text-xs text-gray-400">
        {props.labelContent}
      </label>
      <input
        type={props.inputType}
        id={props.inputType}
        name={props.inputType}
        className="w-full rounded-lg border border-gray-200 focus:border-purple-light text-xs  outline-none text-gray-600 py-2 px-3  transition-colors duration-200 ease-in-out"
      />
    </div>
  )
}

export default FormInput
