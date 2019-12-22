import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Shop from '../views/Shop.vue'
import { Cart, Element, VRouter, Children, Children2, Vx } from '../example'
import CartComp from "../views/Cart.vue";
import History from "../utils/history";

Vue.use(History);
Vue.use(VueRouter);

// 扩展Router，添加goBack方法
VueRouter.prototype.goBack = function() {
  this.isBack = true;
  this.back();
};

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
  // {
  //   path: '/shop',
  //   name: 'shop',
  //   component: Shop,
  //   meta: {
  //     auth: true
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: "/cart",
    name: "cart",
    component: CartComp
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
})


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

router.afterEach((to) => {
  if (router.isBack) {
    History.pop();
    router.isBack = false;
    router.transitionName = "route-back";
  } else {
    History.push(to.path);
    router.transitionName = "route-forward";
  }
})


export default router
