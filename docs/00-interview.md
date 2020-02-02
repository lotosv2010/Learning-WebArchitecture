# 1. 知识要点都是要掌握的吗？
#### 1. 基础⼀定要掌握
    1. js运⾏机制
    2. ES6
    3. 没有这个基础，很难做源码分析
#### 2. 通⽤的技能，有⼀个深⼊ 掌握的即可
    1. vue，react，node, ⼯程化，⼩程序
    2. 每⼀个都是⼊⻔，其实没意义
    3. ⼀定有⼀个源码级的技能
    4. 今天带着⼤家回顾⼀下vue源码
# 2. vue源码学习细节
#### 1. vue2引⼊的虚拟dom 为什么引⼊
    1. 我们有了watcher，每个变量变化，都知道，能直接更新
       1. 直接就知道了diff的结果
    2. 虚拟dom是通过diff 来算出哪⾥变了，再更新dom 依然是要更新dom，只不过让更新最少
    3. 为啥需要虚拟dom
       1. 减少dom操作的次数
       2. 虚拟dom就是⽤js对象，描述dom结构
    4. vue1的时候，每个组件恩{{}}都有⼀个watcher，vue2⼀个组件只有⼀个watcher， 组
件内部的众多变量修改，只通知到组件，组件内部虚拟dom diff来算出修改的变量
#### 2. Object。definproperty的缺点
    1. 数组监听不到
    2. vue拦截数组常⽤⽅法，通知更新
#### 3. vue的虚拟dom有啥特点
#### 4. vue源码执⾏的流程
    1. 刚才分析的过程 整⻬启动的过程
#### 5. vue.extend是啥
#### 6. vue.use是啥
#### 7. 类似的问题，可以问100个 只要看了源码 ，不变应万变 不⽤刷题
    1.不在模板⾥⾯⽤到的变量，是不是不放data⾥⽐较好，因为放了就要有watcher监听
#### 8. ⼯作是⼀辈⼦的事， 不要突击

# 3.vue源码分析
## 1. 找⼊⼝
    1. import Vue from 'vue'
    2. vue这个项⽬ package.json种，module的字段
## 2. core/instance/index
## 3. ⼊⼝执⾏了this._init
## 4. initMixin 扩展函数
    1. 扩展了_init
    2. initLifecycle
       1. 修正⽗元素的$child
       2. 初始化refs children $parent
    3. initEvents
       1. 初始化vm._events
    4. initRender
       1. vm._c 就是createElement ， 在compile模块，会⽤到 ___c
       2. vm.$createElement 也是createElement （重点看的函数）
       3. attrs 和 Listeners
    5. initInjections
       1. 定了向上查找provide的逻辑 vm._provided
    6. initState data 响应式 都在这 （重要）
       1. 初始化_watcher数组
       2. initProps props配置初始化
       3. initMethods
          1.  methods函数，挂载在vm之上 所以才可以直接通过this.获取到
       4.  initData
       5.  observe
       6.  initComputed
           1. computed通过watcher存储在vm._computedWatchers⾥
           2. computed和watcher核⼼都是Watcher，但是多了缓存的控制
       7.  initWatch
           1.  执⾏的是vm.$watch
    7.  initProvide
        1.  vm._provided
        2.  provider可以是函数
    8.  如果有el配置，执⾏$mount
## 5.  stateMixin
    1.  $set
    2.  $delete
    3.  $watch
## 6.  eventsMixin
    1.  on Once off emit 时间存储在 vm._events下⾯
## 7. lifecycleMixin
    1.  _update 重要
        1.  数据更新
        2.  渲染 ⽆论是⾸次，还是后续的更新，都是执⾏ patch （重点学习patch）
    2.  forceUpdate
        1.  强制更新，执⾏的是vm._watcher.update()， watcher是啥
    3.  destory 销毁
## 8.  renderMixin
    1.  $nextTick
        1.  执⾏的是nextTick （后续看）
    2.  _render （重点学习渲染过程） ⽣成虚拟dom
        1.  vnode = render.call(vm._renderProxy, vm.$createElement)
        2.  执⾏render函数，传⼊vm和$createElement
#  4. rutime-with-compileer
    1.  $mount 修正
    2.  runtime-index
        1.  定义patch
        2.  定义$mount
        3.  core/index
            1.  initGlobalAPI
   
   ```js
   Vue.util = {
        warn,
        extend,
        mergeOptions,
        defineReactive
    }

    Vue.set = set
    Vue.delete = del
    Vue.nextTick = nextTick
    export const ASSET_TYPES = [
        'component',
        'directive',
        'filter'
    ]
    {
        data(){

        }
        components:{},
        filters:{},
        directives:{}
    }
    ASSET_TYPES.forEach(type => {
        Vue.options[type + 's'] = Object.create(null)
    })
    注册keep-alive
    initUse 初始化vue.use 插件机制
    initMixin Vue.mixin 合并配置
    initExtend Vue.extend 继承机制
    initAssetRegisters
   ```
vue这么多版本，with-compileer是⼲啥的
