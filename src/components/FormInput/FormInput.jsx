import React from 'react'

const FormInput = ({
  inputType,
  inputId,
  inputName,
  labelContent,
  value,
  onChange,
  placeholder,
  ...props
}) => (
  <div className="sm:mb-0 relative w-full flex-grow">
    <label htmlFor={inputId} className="text-xs text-gray-400">
      {labelContent}
    </label>
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={inputType}
      id={inputId}
      name={inputName}
      className="w-full rounded border border-gray-200 py-2 px-3 text-xs text-gray-600 outline-none transition-colors duration-200 ease-in-out focus:border-purple-light"
    />
  </div>
)

export default FormInput
