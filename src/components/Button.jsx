import React from 'react'
import add from '../assets/icon-plus.svg'

const Button = props => {
  let className =
    'flex justify-around items-center text-xs font-bold rounded-full py-4 px-6 capitalize '

  if (props.buttonKind === 'primary')
    className += 'text-white bg-purple hover:bg-purple-light'

  if (props.buttonKind === 'danger')
    className += 'text-gray-100  bg-red hover:bg-red-light'

  if (props.buttonKind === 'edit')
    className +=
      'text-gray-400 bg-gray-50  bg-gray-200 hover:bg-gray-700 hover:text-gray-200'

  if (props.buttonKind === 'cancel')
    className += 'text-gray-400 bg-gray-50 bg-gray-700  hover:text-gray-200'

  if (props.buttonKind === 'primary-add') {
    className += 'text-white bg-purple hover:bg-purple-light'

    return (
      <button
        className={`${className} py-3`}
        onClick={props.onClick}
        type={props.type ? props.type : 'button'}
      >
        <img
          src={add}
          alt="add"
          className="rounded-full bg-white p-3 ml-[-0.5rem] mr-4"
        />
        {props.children}
      </button>
    )
  }

  return (
    <button
      className={className}
      onClick={props.onClick}
      type={props.type ? props.type : 'button'}
    >
      {props.children}
    </button>
  )
}

export default Button
