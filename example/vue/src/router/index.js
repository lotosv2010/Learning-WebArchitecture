import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Cart, Element, VRouter, Children, Children2, Vx } from '../example'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      auth: true
    }
  },
  {
    path: '/ele',
    name: 'ele',
    component: Element,
    meta: {
      auth: true
    }
  },
  {
    path: '/vr/:username',
    name: 'vrouter',
    props: true,
    component: VRouter,
    // beforeEnter: (to, from, next) => {
    //   window.console.log('beforEnter', to, from)
    //   next()
    // },
    meta: {
      auth: true
    },
    children: [
      {
        path: 'children',
        name: 'children',
        component: Children,
        meta: {
          auth: true
        }
      },
      {
        path: 'children2',
        name: 'children2',
        components: {
          default: Children,
          children2: Children2,
          meta: {
            auth: true
          }
        }
      }
    ]
  },
  {
    path: '/vx',
    name: 'vx',
    component: Vx,
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
