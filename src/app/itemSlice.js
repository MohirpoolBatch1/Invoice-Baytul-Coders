import {createSlice} from '@reduxjs/toolkit'
import uniqueId from 'lodash/uniqueId'
import {convertToNumber, getTotalAmount} from '../components/FormItemRow/utils'

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    itemList: [],
  },
  reducers: {
    addNewItem: state => {
      const newItem = {
        id: uniqueId(),
        name: '',
        quantity: '',
        price: '',
        total: '',
      }
      state.itemList.push(newItem)
    },
    deleteItem: (state, action) => {
      state.itemList.splice(
        state.itemList.findIndex(item => item.id === action.payload),
        1,
      )
    },
    getInputValues: (state, action) => {
      const {name, value, id} = action.payload
      state.itemList.forEach(item => {
        if (item.id === id) {
          item[name] = convertToNumber(name, value)
          item.total = getTotalAmount(item.price, item.quantity)
        }
      })
    },
    clearItemInputs: state => {
      state.itemList = []
    },
  },
})

export const {addNewItem, deleteItem, getInputValues, clearItemInputs} =
  itemSlice.actions
export default itemSlice.reducer
