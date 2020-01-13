// import "@babel/polyfill"
// const arr = [new Promise(() => {}), new Promise(() => {})]
['asd', 12, 24].map(item => {
  console.log(item);
});

import { getPic } from './src/utils/tools'
import { getUser } from './src/server/user'
import './src/style/index.scss'

import './src/views/react/index.jsx'

getPic()


getUser()
  .then(res => console.log(res))
  .catch(error => console.log(error))

import _ from 'lodash'
console.log(_.join(['a','b','c'], '****'))

// js热更新
if (module.hot) {
  module.hot.accept('./src/utils/tools', () => {
    console.log('has update')
    // getPic()
  })
}

export default {}