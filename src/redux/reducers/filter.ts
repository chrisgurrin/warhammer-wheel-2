import { createSlice } from '@reduxjs/toolkit';

export type FilterStore = {
    filter: Store;
};

type Store = {
    items: string[];
    showPaused: boolean;
    showInProgress: boolean;
    showCompleted: boolean;
};

const defaultStore: Store = {
    items: [],
    showPaused: true,
    showInProgress: true,
    showCompleted: true,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState: defaultStore,
    reducers: {
        setFilter: (state, action) => {
            state.items = action.payload;
        },
        addFilterItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFilterItem: (state, action) => {
            state.items = state.items.filter((x) => x !== action.payload);
        },
        setShowPaused: (state, action) => {
            state.showPaused = action.payload;
        },
        setShowInProgress: (state, action) => {
            state.showInProgress = action.payload;
        },
        setShowCompleted: (state, action) => {
            state.showCompleted = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setFilter,
    addFilterItem,
    removeFilterItem,
    setShowPaused,
    setShowInProgress,
    setShowCompleted,
} = filterSlice.actions;

export default filterSlice.reducer;
