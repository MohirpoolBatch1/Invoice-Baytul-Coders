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
<<<<<<< HEAD
    formData: formReducer,
    itemList: itemReducer,
=======
>>>>>>> 204f848 (feat(SSP-56): Finished theme-changing-functionality UI)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(invoiceApi.middleware),
})

export const themeReducer = (action, state = {cash: false}) => {
  switch (action.type) {
    case false:
      return {...state, cash: state.cash + action.payload}
    default:
      return state
  }
}
