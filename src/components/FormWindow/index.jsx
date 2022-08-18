import React, {useState, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../Button/Button.jsx'
import FormInput from '../FormInput/FormInput.jsx'
import DataPicker from '../FormInput/FormDatePicker.jsx'
import Dropdown from '../FormInput/FormDropdown.jsx'
import FormItemRow from '../FormItemRow/index.jsx'
import {netDays} from '../FormInput/constants'
import {addNewItem, clearItemInputs} from '../../app/itemSlice'
import {
  useAddInvoiceMutation,
  useSaveAsDraftMutation,
  useUpdateInvioceMutation,
} from '../../app/invoiceApi'
import {
  getGeneralData,
  getSenderAddress,
  getClientAddress,
  clearInputs,
} from '../../app/formSlice'

function FormWindow({isOpenForm, closeForm, editable, invoiceId}) {
  const [paymentDue, setPaymentDue] = useState(new Date())
  const [terms, setTerms] = useState(netDays[1])

  const dispatch = useDispatch()
  const {itemList} = useSelector(state => state.itemList)
  const {generalData, senderAddress, clientAddress} = useSelector(
    state => state.formData,
  )
  const handleGeneralData = e => {
    const {name, value} = e.target
    dispatch(getGeneralData({name, value}))
  }
  const handleSenderAddress = e => {
    const {name, value} = e.target
    dispatch(getSenderAddress({name, value}))
  }
  const handleClientAddress = e => {
    const {name, value} = e.target
    dispatch(getClientAddress({name, value}))
  }

  const [addInvoice] = useAddInvoiceMutation()
  const [saveAsDraft] = useSaveAsDraftMutation()
  const [updateInvoice] = useUpdateInvioceMutation()

  const handleAddInvoice = useCallback(
    async status => {
      if (status === 'draft') {
        const newGeneralData = {...generalData, status}
        await saveAsDraft({
          ...newGeneralData,
          paymentTerms: terms.day,
          items: itemList,
          paymentDue,
          senderAddress,
          clientAddress,
        })
      } else {
        await addInvoice({
          ...generalData,
          paymentTerms: terms.day,
          items: itemList,
          paymentDue,
          senderAddress,
          clientAddress,
        })
      }
      closeForm()
      dispatch(clearInputs())
      dispatch(clearItemInputs())
    },
    [
      addInvoice,
      saveAsDraft,
      dispatch,
      closeForm,
      clientAddress,
      generalData,
      itemList,
      paymentDue,
      senderAddress,
      terms,
    ],
  )

  const clickedDiscard = () => {
    closeForm()
    dispatch(clearInputs())
    dispatch(clearItemInputs())
  }

  const handleSaveChanges = () => {
    updateInvoice({
      id: invoiceId,
      ...generalData,
      paymentTerms: terms.day,
      paymentDue,
      senderAddress: {
        ...senderAddress,
        isModified: true,
      },
      clientAddress: {
        ...clientAddress,
        isModified: true,
      },
      items: {
        createdItems: [],
        modifiedItems: itemList,
        deletedItems: [],
      },
    })
    closeForm()
    dispatch(clearInputs())
    dispatch(clearItemInputs())
  }

  return (
    <div
      className={`${isOpenForm ? null : 'hidden'} fixed inset-0 bg-gray-700/40`}
    >
      <div className=" flex h-screen max-w-[44rem] flex-col justify-between rounded-[1.25rem] bg-white p-[3.5rem] pl-40 ">
        <div className="overflow-y-auto  p-2 pr-4">
          <h1 className="mb-8 font-bold text-gray-600">
            {editable ? (
              <span>
                Edit <span className="text-gray-400">#</span>
                {invoiceId.toUpperCase()}
              </span>
            ) : (
              'New invoice'
            )}
          </h1>
          <p className="mb-4 text-purple">Bill From</p>
          <FormInput
            value={senderAddress.street}
            onChange={handleSenderAddress}
            inputId="address"
            inputType="text"
            inputName="street"
            labelContent="Street Address"
          />
          <div className="my-2 columns-3">
            <FormInput
              value={senderAddress.city}
              onChange={handleSenderAddress}
              inputId="city"
              inputType="text"
              inputName="city"
              labelContent="City"
            />
            <FormInput
              value={senderAddress.postCode}
              onChange={handleSenderAddress}
              inputId="post-code"
              inputType="text"
              inputName="postCode"
              labelContent="Post code"
            />
            <FormInput
              value={senderAddress.country}
              onChange={handleSenderAddress}
              inputId="country"
              inputType="text"
              inputName="country"
              labelContent="Country"
            />
          </div>
          <p className="mb-4 text-purple">Bill to</p>
          <div className="space-y-2">
            <FormInput
              value={generalData.clientName}
              onChange={handleGeneralData}
              inputId="client-name"
              inputType="text"
              inputName="clientName"
              labelContent="Client's Name"
            />
            <FormInput
              value={generalData.clientEmail}
              onChange={handleGeneralData}
              inputId="client-email"
              inputType="text"
              inputName="clientEmail"
              labelContent="Client's Email"
            />
            <FormInput
              value={clientAddress.street}
              onChange={handleClientAddress}
              inputId="client-address"
              inputType="text"
              inputName="street"
              labelContent="Street Address"
            />
          </div>
          <div className="my-2 columns-3">
            <FormInput
              value={clientAddress.city}
              onChange={handleClientAddress}
              inputId="client-city"
              inputType="text"
              inputName="city"
              labelContent="City"
            />
            <FormInput
              value={clientAddress.postCode}
              onChange={handleClientAddress}
              inputId="client-post-code"
              inputType="text"
              inputName="postCode"
              labelContent="Post code"
            />
            <FormInput
              value={clientAddress.country}
              onChange={handleClientAddress}
              inputId="client-country"
              inputType="text"
              inputName="country"
              labelContent="Country"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <DataPicker
              disabled={editable}
              labelContent={'Invoice Date'}
              paymentDue={paymentDue}
              handleChange={date => setPaymentDue(date)}
            />
            <Dropdown
              labelContent={'Payment Terms'}
              selected={terms}
              setSelected={setTerms}
            />
          </div>
          <FormInput
            value={generalData.description}
            onChange={handleGeneralData}
            inputId="project-description"
            inputType="text"
            inputName="description"
            labelContent="Project Description"
          />
          <h2 className="mt-6 mb-4 text-[#777F98]">Item List</h2>
          <div className="flex text-xs text-gray-400">
            <div className="basis-1/4 text-left">Item Name</div>
            <div className="basis-1/4 text-center">Qty.</div>
            <div className="basis-1/4 ">Price</div>
            <div className="basis-1/4 ">Total</div>
          </div>
          <div>
            {itemList.map(item => (
              <FormItemRow key={item.id} item={item} />
            ))}
          </div>
          <Button
            onClick={() => dispatch(addNewItem())}
            className="mt-4 w-full"
            buttonKind="edit"
          >
            + Add New Item
          </Button>
        </div>
        {editable ? (
          <div className="flex items-center justify-end space-x-2 pt-6 ">
            <Button onClick={clickedDiscard} buttonKind="edit">
              Cancel
            </Button>
            <Button onClick={handleSaveChanges} buttonKind="primary">
              Save Changes
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-6 ">
            <Button onClick={clickedDiscard} buttonKind="edit">
              Discard
            </Button>
            <div className="flex space-x-2 ">
              <Button
                onClick={() => handleAddInvoice('draft')}
                buttonKind="cancel"
              >
                Save as Draft
              </Button>
              <Button onClick={handleAddInvoice} buttonKind="primary">
                Save & Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormWindow
