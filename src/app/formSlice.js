import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  generalData: {
    clientName: '',
    clientEmail: '',
    description: '',
    status: 'pending',
  },
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
}

export const formSlice = createSlice({
  name: 'formDatas',
  initialState,
  reducers: {
    getGeneralData: (state, action) => {
      const {name, value} = action.payload
      state.generalData[name] = value
    },
    getSenderAddress: (state, action) => {
      const {name, value} = action.payload
      state.senderAddress[name] = value
    },
    getClientAddress: (state, action) => {
      const {name, value} = action.payload
      state.clientAddress[name] = value
    },
    clearInputs: state => {
      state.clientAddress = initialState.clientAddress
      state.senderAddress = initialState.senderAddress
      state.generalData = initialState.generalData
    },
    updateInvoice: (state, action) => {
      const {
        clientName,
        clientEmail,
        description,
        senderAddress,
        clientAddress,
      } = action.payload
      state.generalData.clientName = clientName
      state.generalData.clientEmail = clientEmail
      state.generalData.description = description
      state.senderAddress = senderAddress
      state.clientAddress = clientAddress
    },
  },
})

export const {
  getGeneralData,
  getSenderAddress,
  getClientAddress,
  clearInputs,
  updateInvoice,
} = formSlice.actions
export default formSlice.reducer
