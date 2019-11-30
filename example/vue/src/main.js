import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './plugins/element.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  window.console.log('beforeEach', to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  window.console.log('beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  window.console.log('afterEach', to, from)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
