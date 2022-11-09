import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Provider } from 'react-redux'
import { Main } from './Components/main'
import {store} from './Components/store'


function App() {

  return (
    <Provider store={store}>
                    <Main />
  </Provider>
  )
}

export default App
