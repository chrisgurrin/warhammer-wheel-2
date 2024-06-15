import { createSlice } from '@reduxjs/toolkit'

export type ItemStore = {
  items:{
    value: string[]
  }
}

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    value: []
  },
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload
    },
    addItem: (state, action) => {
      state.value = [...state.value, action.payload] as never[]
    },
    removeItem: (state, action) => {
      state.value = state.value.filter(x => x !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setItems, addItem, removeItem } = itemSlice.actions

export default itemSlice.reducer