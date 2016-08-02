import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { messages } from './getMessages'

const appReducer = combineReducers({
  routing: routerReducer,
  messages: messages
})

export default appReducer
