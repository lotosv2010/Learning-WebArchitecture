class Gue {
  constructor(options) {
    this.$data = options.data;
    this.$options = options;
    this.observe(this.$data);

    // 初始化编译模板
    new Compile(options.el, this);

    // 执行钩子函数
    if(options.created) {
      options.created.call(this)
    }
  }
  observe(data) {
    if(!data || typeof data !== 'object') return;

    // 遍历对象
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);

      // 代理data中的属性到vue实例上
      this.proxyData(key)
    })
  }

  // 数据响应式
  defineReactive(data, key, val) {

    // 递归解决数据嵌套
    this.observe(val)

    const dep = new Dep()

    Object.defineProperty(data, key, {
      get() {
        // 将Dep.target(即当前的Watcher对象存入Dep的deps中)
        Dep.target && dep.addDep(Dep.target)
        return val;
      },
      set(newVal) {
        if(newVal !== val) val = newVal 
        // 在set的时候触发dep的notify来通知所有的Watcher对象更新视图
        dep.notify()
      }
    })
  }

  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}

// 依赖收集
class Dep {
  constructor() {
    // 存所有的依赖
    this.deps = []
  }

  // 在deps中添加一个监听器对象
  addDep(dep) {
    this.deps.push(dep)
  }

  // 通知所有监听器去更新视图
  notify() {
    this.deps.forEach(dep => {
      dep.update()
    })
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    // 在new一个监听器对象时将该对象赋值给Dep.target，在get中会用到
    Dep.target = this;

    // 触发getter，添加依赖
    this.vm[this.key];

    // 置空
    Dep.target = null
  }

  // 更新视图的方法
  update() {
    console.log('视图更新啦~')
    this.cb.call(this.vm, this.vm[this.key]);
  }
}