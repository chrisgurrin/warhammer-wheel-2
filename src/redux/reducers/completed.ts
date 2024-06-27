import { createSlice } from '@reduxjs/toolkit';

export type CompletedStore = {
    completed: {
        value: string[];
    };
};

export const completedSlice = createSlice({
    name: 'inProgress',
    initialState: {
        value: [],
    },
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload;
        },
        addCompletedItem: (state, action) => {
            state.value = [...state.value, action.payload] as never[];
        },
        removeCompletedItem: (state, action) => {
            state.value = state.value.filter((x) => x !== action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setFilter, addCompletedItem, removeCompletedItem } =
    completedSlice.actions;

export default completedSlice.reducer;
