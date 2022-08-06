import React from 'react'
import FormInput from '../FormInput/FormInput.jsx'
import deleteIcon from '../../assets/icon-delete.svg'
import {totalAmount} from './util'

function FormItemRow({item, index, itemList, setItemList}) {
  const handleInputChange = (e, i) => {
    const {name, value} = e.target
    const list = [...itemList]
    list[i][name] = name === 'name' ? value : +value
    list[i].total = +totalAmount(item.price, item.quantity)
    setItemList(list)
  }

  const handleRemoveClick = i => {
    const list = [...itemList]
    list.splice(i, 1)
    setItemList(list)
  }

  return (
    <div className="flex items-center justify-between py-3">
      <div className="w-36">
        <FormInput
          value={item.name}
          onChange={e => handleInputChange(e, index)}
          inputType="text"
          inputName="name"
        />
      </div>
      <div className="w-12">
        <FormInput
          value={item.quantity}
          onChange={e => handleInputChange(e, index)}
          placeholder="0"
          inputType="number"
          inputName="quantity"
        />
      </div>
      <div className="w-[6.5rem]">
        <FormInput
          value={item.price}
          onChange={e => handleInputChange(e, index)}
          placeholder="0.00"
          inputType="number"
          inputName="price"
        />
      </div>
      <div className="w-16 text-xs text-gray-300">
        {totalAmount(item.price, item.quantity)}
      </div>
      <button onClick={() => handleRemoveClick(index)} className="mx-2">
        <img src={deleteIcon} alt="delete icon" />
      </button>
    </div>
  )
}

export default FormItemRow
