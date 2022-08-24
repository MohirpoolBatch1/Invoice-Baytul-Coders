import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App'
import {store} from './app/store'
import './index.css'
import {ThemeProvider} from './context/theme.jsx'

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
