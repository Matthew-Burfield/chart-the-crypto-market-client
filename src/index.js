import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
// import './globalStyles.css'

const title = 'Minimal react webpack babel setup11'

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
