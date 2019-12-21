import axios from 'axios'
export function login(user) {
  // axios返回值是promise
  // 参考:https://www.cnblogs.com/cckui/p/10444246.html
  // return new Promise((resolve, reject) => {
  //   axios.get('/api/login', {
  //     ...user
  //   }).then((res) => {
  //     resolve(res)
  //   }).catch((err) => {
  //     reject(err)
  //   })
  // })
  return axios.get('/api/login', {
    params: {
      ...user
    }
  })
}