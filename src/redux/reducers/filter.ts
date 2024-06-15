import { createSlice } from '@reduxjs/toolkit'

export type FilterStore = {
  filter:{
    value: string[]
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: []
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload
    },
    addFilterItem: (state, action) => {
      state.value = [...state.value, action.payload] as never[]
    },
    removeFilterItem: (state, action) => {
        state.value = state.value.filter(x => x !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFilter, addFilterItem, removeFilterItem } = filterSlice.actions

export default filterSlice.reducer