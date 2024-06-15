import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loadState } from "./browser-storage";

import filterReducer from './reducers/filter'
import itemsReducer from './reducers/items'
import selectedItemReducer from './reducers/selectedItem'
import viewReducer from './reducers/view'
import inProgressReducer from './reducers/inProgress';
import themeReducer from './reducers/theme';

export default configureStore({
  preloadedState: loadState(),
  reducer: combineReducers({
    filter: filterReducer,
    inProgress: inProgressReducer,
    items: itemsReducer,
    selectedItem: selectedItemReducer,
    theme: themeReducer,
    view: viewReducer,
  })
})