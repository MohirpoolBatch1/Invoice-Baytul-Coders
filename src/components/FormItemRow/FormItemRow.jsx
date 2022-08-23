import React, {useState} from 'react'
import FormInput from '../FormInput/FormInput.jsx'

function FormItemRow({itemName, qty, price, total}) {
  const [over, setOver] = useState(false)
  return (
    <div className="flex w-full items-center justify-between">
      <div className="mr flex w-full max-w-[28.313rem] items-center justify-between">
        <FormInput
          value={itemName}
          inputType={'text'}
          inputWrapperStyle={'w-full mr-4'}
          inputStyle={'pt-4 pb-4 pl-5 w-full rounded font-bold text-body-1'}
          placeholder={'Email Design'}
        />
        <FormInput
          value={qty}
          inputType={'number'}
          inputWrapperStyle={'w-full max-w-[2.875rem] mr-4'}
          inputStyle={'pt-4 pb-4 pl-5 w-full rounded font-bold text-body-1'}
          placeholder={'0'}
        />
        <FormInput
          value={price}
          inputType={'number'}
          inputWrapperStyle={'w-full max-w-[6.25rem] mr-4'}
          inputStyle={`pt-4 pb-4 pl-5 w-full rounded font-bold text-body-1 ${
            over && 'border-red'
          }`}
          placeholder={'0.00'}
        />
        <span className="text-body-1 font-bold text-gray-300">{total}</span>
      </div>
      <button>
        <svg
          width="13"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          className="delete"
        >
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fill={over ? '#EC5757' : ' #888EB0'}
            fillRule="nonzero"
            onMouseOver={() => setOver(!over)}
            onMouseOut={() => setOver(!over)}
          />
        </svg>
      </button>
    </div>
  )
}

export default FormItemRow
