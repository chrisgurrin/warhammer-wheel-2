import { Provider } from 'react-redux'
import './App.css'

import { Wheel } from './components/wheel'
import store from './redux/store'
import debounce from 'debounce'
import { saveState } from './redux/browser-storage'
import { List } from './components/list/list'

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 1000)
);

function App() {  
  return (
    <Provider store={store}>
        <div className="flex justify-start items-center w-min flex-grow shrink-0 pt-6 pb-8 px-8 gap-52 max-h-full">     
          <List />
          <Wheel />     
        </div>
    </Provider>
  )
}

export default App
