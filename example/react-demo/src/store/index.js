import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { counterReducer } from './count.redux'
import { user } from './user.redux'

const store = createStore(
  combineReducers({ counter: counterReducer, user }),
  applyMiddleware(logger, thunk)
)

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }
export default store;