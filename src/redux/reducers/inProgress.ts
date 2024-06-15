import { createSlice } from '@reduxjs/toolkit'

export type InProgressStore = {
  inProgress:{
    value: string[]
  }
}

export const inProgressSlice = createSlice({
  name: 'inProgress',
  initialState: {
    value: []
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload
    },
    addInProgressItem: (state, action) => {
      state.value = [...state.value, action.payload] as never[]
    },
    removeInProgressItem: (state, action) => {
        state.value = state.value.filter(x => x !== action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFilter, addInProgressItem, removeInProgressItem } = inProgressSlice.actions

export default inProgressSlice.reducer