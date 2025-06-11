import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import App from './App'
import configureStore from './store'

const store = configureStore()
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

serviceWorker.register()
