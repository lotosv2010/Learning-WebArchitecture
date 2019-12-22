import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './plugins/element.js'
import store from './store'
import interceptors from './interceptors'
import {createAPI} from 'cube-ui'
import CartAnim from '@/components/CartAnim'
import create from './utils/create'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 给vue注册实例方法，方法名$createCartAnim
createAPI(Vue, CartAnim, ['transitionend'])
Vue.prototype.$create = create;

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 执行请求拦截器
interceptors(vm)
