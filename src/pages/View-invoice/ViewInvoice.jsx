import React from 'react'
import {NavLink} from 'react-router-dom'
import GoBackImage from '../../assets/icon-arrow-left.svg'
import Button from '../../components/Button/Button.jsx'

function ViewInvoice() {
  return (
    <div className="mx-auto max-w-[45.625rem] w-full border">
      <div className="flex justify-between items-center max-w-[5.063rem] w-full">
        <NavLink to={'/'}>
          <img src={GoBackImage} alt="Go back" />
        </NavLink>
        <p>Go back</p>
      </div>
      <div>
        <div className="w-full flex">
          <div className="w-full">
            <ul className="flex">
              <li>
                <p>Status</p>
              </li>
              <li>
                <p>Pending</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex">
              <li className="">
                <Button className="">Edit</Button>
              </li>
              <li className="">
                <Button className="">Delete</Button>
              </li>
              <li className="">
                <Button className="">Mark as Paid</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ViewInvoice
