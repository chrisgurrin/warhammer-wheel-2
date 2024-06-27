import { createSlice } from '@reduxjs/toolkit';

export type ViewStore = {
    view: {
        value: string;
    };
};

export const setViewSlice = createSlice({
    name: 'view',
    initialState: {
        value: 'text',
    },
    reducers: {
        setView: (state, action) => {
            console.log(action);
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setView } = setViewSlice.actions;

export default setViewSlice.reducer;
