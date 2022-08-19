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
      // eslint-disable-next-line no-param-reassign
      state.generalData[name] = value
    },
    getSenderAddress: (state, action) => {
      const {name, value} = action.payload
      // eslint-disable-next-line no-param-reassign
      state.senderAddress[name] = value
    },
    getClientAddress: (state, action) => {
      const {name, value} = action.payload
      // eslint-disable-next-line no-param-reassign
      state.clientAddress[name] = value
    },
    clearInputs: state => {
      // eslint-disable-next-line no-param-reassign
      state.clientAddress = initialState.clientAddress
      // eslint-disable-next-line no-param-reassign
      state.senderAddress = initialState.senderAddress
      // eslint-disable-next-line no-param-reassign
      state.generalData = initialState.generalData
    },
  },
})

export const {getGeneralData, getSenderAddress, getClientAddress, clearInputs} =
  formSlice.actions
export default formSlice.reducer
