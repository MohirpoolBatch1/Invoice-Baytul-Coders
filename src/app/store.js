import {configureStore} from '@reduxjs/toolkit'
import {invoiceApi} from './invoiceApi'
import formReducer from './formSlice'
import itemReducer from './itemSlice'

// TODO: Default reducer yozilgan, bunga hozircha tegmay turing.
const initialState = {value: 0}

function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'increment':
      return {...state, value: state.value + 1}
    case 'decrement':
      return {...state, value: state.value - 1}
    case 'incrementByAmount':
      return {...state, value: state.value + action.payload}
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [invoiceApi.reducerPath]: invoiceApi.reducer,
    formData: formReducer,
    itemList: itemReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
})
