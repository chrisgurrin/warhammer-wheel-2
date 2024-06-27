import { createSlice } from '@reduxjs/toolkit';

export type SelectedItemStore = {
    selectedItem: {
        value: string;
    };
};

export const selectedItemSlice = createSlice({
    name: 'selectedItem',
    initialState: {
        value: 'No item',
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedItem } = selectedItemSlice.actions;

export default selectedItemSlice.reducer;
