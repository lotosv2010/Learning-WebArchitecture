import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { counterReducer } from './count.redux'
import { user } from './user.redux'
// 注册redux-saga
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   combineReducers({ counter: counterReducer, user }),
//   applyMiddleware(logger, thunk)
// )

const store = createStore(
  combineReducers({ user }),
  applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(mySaga)

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }
export default store;