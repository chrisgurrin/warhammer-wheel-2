import {  useSelector } from 'react-redux'
import './App.css'

import { Wheel } from './components/wheel'
import store from './redux/store'
import debounce from 'debounce'
import { saveState } from './redux/browser-storage'
import { ThemeStore } from './redux/reducers/theme'
import { List } from './components/list/list'
import { ThemeSelector } from './components/theme/theme-selector'

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 1000)
);

function App() { 
 const theme = useSelector((state:ThemeStore) => state.theme.value);
   
  return (

        <div data-theme={theme}  className="flex justify-start items-center w-min flex-grow shrink-0 pt-6 pb-8 px-8 gap-52 max-h-full">     
          <List />
          <Wheel /> 
          <div className="flex flex-grow justify-end h-full">
            <ThemeSelector />    
          </div>
        </div>

  )
}

export default App
