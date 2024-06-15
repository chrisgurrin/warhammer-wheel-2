import { configureStore } from '@reduxjs/toolkit'
import { loadState } from "./browser-storage";

import filterReducer from './reducers/filter'
import itemsReducer from './reducers/items'
import selectedItemReducer from './reducers/selectedItem'
import viewReducer from './reducers/view'
import inProgressReducer from './reducers/inProgress';

export default configureStore({
  preloadedState: loadState(),
  reducer: {
    filter: filterReducer,
    inProgress: inProgressReducer,
    items: itemsReducer,
    selectedItem: selectedItemReducer,
    view: viewReducer,
  }
})