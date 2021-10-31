import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store/index.js'
import { Provider } from 'react-redux'
import App from './App'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
)
