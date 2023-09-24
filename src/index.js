import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import 'animate.css/animate.min.css' // keep in mind animate.css will not work for users that have "prefers-reduced-motion" enabled

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
