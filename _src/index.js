import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/index.scss'
import App from 'components/App'

/* -------------------------------------------------------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/* -------------------------------------------------------------------------- */

import('dev/invisibleErrorOverlay').then(({ invisibleErrorOverlay }) =>
  invisibleErrorOverlay()
)
