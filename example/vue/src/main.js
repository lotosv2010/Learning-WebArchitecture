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

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.auth) {
    // 需要登陆
    const token = localStorage.getItem('token');
    if(token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    // 不需要登陆验证
    next()
  }
})

// router.beforeResolve((to, from, next) => {
//   window.console.log('beforeResolve', to, from)
//   next()
// })

// router.afterEach((to, from) => {
//   window.console.log('afterEach', to, from)
// })

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 执行请求拦截器
interceptors(vm)
