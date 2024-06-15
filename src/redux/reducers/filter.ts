import { createSlice } from '@reduxjs/toolkit'

export type FilterStore = {
  filter: Store
}

type Store = {
  value:string[]
}

const defaultStore:Store = {
    value: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultStore,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload
    },
    addFilterItem: (state, action) => {
      state.value = [...state.value, action.payload]
    },
    removeFilterItem: (state, action) => {
        state.value = state.value.filter(x => x !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFilter, addFilterItem, removeFilterItem } = filterSlice.actions

export default filterSlice.reducer