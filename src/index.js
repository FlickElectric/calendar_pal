import React from 'react'
import ReactDOM from 'react-dom'
import Authentication from './components/authentication'
import registerServiceWorker from './registerServiceWorker'

import App from './app'
import './index.css'
import './fonts.css'

ReactDOM.render(
  <Authentication>
    <App />
  </Authentication>,
  document.getElementById('root')
)
registerServiceWorker()
