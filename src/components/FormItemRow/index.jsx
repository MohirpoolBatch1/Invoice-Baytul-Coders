import React from 'react'
import {useDispatch} from 'react-redux'
import FormInput from '../FormInput/FormInput.jsx'
import deleteIcon from '../../assets/icon-delete.svg'
import {getTotalAmount} from './utils'
import {deleteItem, getInputValues} from '../../app/itemSlice'

const FormItemRow = React.memo(({item}) => {
  const dispatch = useDispatch()

  const handleInputChange = e => {
    const {name, value} = e.target
    dispatch(getInputValues({name, value, id: item.id}))
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div className="w-36">
        <FormInput
          value={item.name}
          onChange={handleInputChange}
          inputType="text"
          inputName="name"
        />
      </div>
      <div className="w-12">
        <FormInput
          value={item.quantity}
          onChange={handleInputChange}
          placeholder="0"
          inputType="number"
          inputName="quantity"
        />
      </div>
      <div className="w-[6.5rem]">
        <FormInput
          value={item.price}
          onChange={handleInputChange}
          placeholder="0.00"
          inputType="number"
          inputName="price"
        />
      </div>
      <div className="w-16 text-xs text-gray-300">
        {getTotalAmount(item.price, item.quantity)?.toLocaleString('ru-RU', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) || '0.00'}
      </div>
      <button onClick={() => dispatch(deleteItem(item.id))} className="mx-2">
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  )
})

export default FormItemRow
