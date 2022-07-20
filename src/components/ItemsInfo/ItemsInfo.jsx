import React from 'react'
import {totalAmount} from '../../formatters'

function ItemsInfo({name, quantity, price, total}) {
  return (
    <li className="flex w-full pb-8 font-bold">
      <p className="w-full max-w-[17.875rem] text-left text-body-1 font-bold text-gray-600">
        {name}
      </p>
      <p className="w-full max-w-[1.875rem] text-center text-body-1 font-bold text-gray-400">
        {quantity}
      </p>
      <p className="w-full max-w-[7.375rem] text-right text-body-1 font-bold text-gray-400">
        {totalAmount(price)}
      </p>
      <p className="w-full max-w-[8.563rem] text-right text-body-1 font-bold text-gray-600">
        {totalAmount(total)}
      </p>
    </li>
  )
}

export default ItemsInfo
