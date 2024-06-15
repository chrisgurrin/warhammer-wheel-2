import { createSlice } from '@reduxjs/toolkit'

export type ThemeStore = {
  theme: Store
}

type Store = {
  value:string
}

const defaultStore:Store = {
    value: ''
}

export const themeSlice = createSlice({
  name: 'filter',
  initialState: defaultStore,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer