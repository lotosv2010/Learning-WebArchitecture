import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Cart, Element, VRouter, Children, Children2 } from '../example'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/ele',
    name: 'ele',
    component: Element
  },
  {
    path: '/vr/:username',
    name: 'vrouter',
    props: true,
    component: VRouter,
    beforeEnter: (to, from, next) => {
      window.console.log('beforEnter', to, from)
      next()
    },
    children: [
      {
        path: 'children',
        name: 'children',
        component: Children
      },
      {
        path: 'children2',
        name: 'children2',
        components: {
          default: Children,
          children2: Children2
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
