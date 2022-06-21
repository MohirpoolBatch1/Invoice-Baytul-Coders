import React from 'react'
import FormDatePicker from '../../components/FormInput/FormDatePicker.jsx'
import FormDropdown from '../../components/FormInput/FormDropdown.jsx'
import FormInput from '../../components/FormInput/FormInput.jsx'

function Homepage() {
  return (
    <div className="">
      <div>
        <FormInput inputType="email" labelContent="Email" />
      </div>
      <div className="flex gap-3">
        <FormInput inputType="text" labelContent="City" />
        <FormInput inputType="text" labelContent="Post Code" />
        <FormInput inputType="text" labelContent="Country" />
      </div>
      <FormInput inputType="text" labelContent="Client's Name" />
      <div className="flex gap-3">
        <FormDatePicker inputType="date" labelContent="Issue date" />
        <FormDropdown labelContent="Choose your options" />
      </div>
      <div className="flex gap-3">
        <FormInput inputType="text" labelContent="Item Name" />
        <div>
          <FormInput inputType="number" labelContent="Qty." />
        </div>
        <FormInput inputType="number" labelContent="Price" />
      </div>
    </div>
  )
}

export default Homepage
