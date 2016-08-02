import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import { fetchMessagesFromAPI } from './actions/getMessages'
import { getAllMessagesFromAPI } from '../server/api'

import App from './components/App'
import MessageBoardContainer from './containers/MessageBoardContainer'

import appReducer from './reducers'

let store = createStore(
  appReducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)


fetchMessagesFromAPI()
// store.dispatch(fetchMessagesFromAPI())

// getAllMessagesFromAPI()


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={MessageBoardContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
