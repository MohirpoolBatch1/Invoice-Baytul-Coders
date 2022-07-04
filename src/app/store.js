import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import {apiSlice} from './apiSlice.jsx'
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
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
