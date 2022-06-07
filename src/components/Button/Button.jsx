import React from 'react'
import add from '../../assets/icon-plus.svg'
import {cancel, danger, edit, primary, primaryAdd} from './Constant'

const Button = props => {
  let className =
    'flex justify-around items-center text-xs font-bold rounded-full py-4 px-6 capitalize '

  if (props.buttonKind === primary)
    className += 'text-white bg-purple hover:bg-purple-light'

  if (props.buttonKind === danger)
    className += 'text-gray-100  bg-red hover:bg-red-light'

  if (props.buttonKind === edit)
    className +=
      'text-gray-400 bg-gray-50  bg-gray-200 hover:bg-gray-700 hover:text-gray-200'

  if (props.buttonKind === cancel)
    className += 'text-gray-400 bg-gray-50 bg-gray-700  hover:text-gray-200'

  if (props.buttonKind === primaryAdd) {
    className += 'text-white bg-purple hover:bg-purple-light'
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
      type={props.type ? props.type : 'button'}
    >
      {props.buttonKind === primaryAdd ? (
        <img
          src={add}
          alt="add"
          className="rounded-full bg-white p-3 ml-[-0.5rem] mr-4"
        />
      ) : null}
      {props.children}
    </button>
  )
}

export default Button
