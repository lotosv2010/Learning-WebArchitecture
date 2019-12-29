import { call, put, takeEvery } from 'redux-saga/effects'

// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === 'Jerry') {
          resolve({ id: 1, name: 'Jerry', age: 20 })
        } else {
          reject('用户名或密码错误')
        }
      }, 2000)
    })
  }
}

// worker Saga
function *login(action) {
  try {
    yield put({ type: 'requestLogin'})
    const result = yield call(UserService.login, action.uname);
    yield put({ type: 'loginSuccess', result })
  } catch (error) {
    yield put({ type: "loginFailure", error });
  }
}

function *mySaga() {
  yield takeEvery('login', login);
}

export default mySaga;