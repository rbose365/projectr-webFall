/* global document: true */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

const CustomRouter = () => (
  <Router history={browserHistory} routes={routes} />
)

ReactDOM.render(<CustomRouter />, document.body)
