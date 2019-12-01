class Compile {
  constructor(el, vm) {
    this.$el = document.querySelector(el);
    this.$vm = vm;

    // 编译
    if(this.$el) {
      // 转化内部内容片段Fragment
      this.$fragment = this.node2Fragment(this.$el);
      // 执行编译
      this.compile(this.$fragment);
      // 将编译完的html结果追加至$el
      this.$el.appendChild(this.$fragment);
    }
  }

  // 将宿主元素中的代码片段拿出来遍历，这样做比较高效
  node2Fragment(el) {
    const frag = document.createDocumentFragment();
    // 将el中所有子元素搬家至frag中
    let child;
    while(child = el.firstChild) {
      frag.appendChild(child)
    }
    return frag
  }

  // 编译过程
  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      // 类型判断
      if(this.isElement(node)) {
        // 元素
        // console.log('编译元素', node.nodeName)
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr => {
          const attrName = attr.name; // 属性名
          const exp = attr.value; // 属性值
          if(this.isDirective(attrName)) {
            // 指令
            const dir = attrName.substring(2);
            // 执行指令
            this[dir] && this[dir](node, this.$vm, exp)
          }
          if(this.isEvent(attrName)) {
            // 事件
            const dir = attrName.substring(1);
            this.eventHandler(node, this.$vm, exp, dir)
          }
        })
      } else if(this.isInterpolation(node)) {
        // 插值
        // console.log('编译插值', node.textContent)
        this.compileText(node)
      }

      // 递归子节点
      if(node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  compileText(node) {
    // console.log(RegExp.$1)
    // node.textContent = this.$vm.$data[RegExp.$1]
    this.update(node, this.$vm, RegExp.$1, 'text')
  }

  // 更新函数
  update(node, vm, exp, dir) {
    const updaterFn = this[`${dir}Updater`];
    // 初始化
    updaterFn && updaterFn(node, vm[exp])
    // 依赖收集
    new Watcher(vm, exp, function(value) {
      updaterFn && updaterFn(node, value)
    })
  }

  text(node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  textUpdater(node, value) {
    node.textContent = value
  }

  html(node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }

  htmlUpdater(node, value) {
    node.innerHTML = value;
  }

  model(node, vm, exp) {
    this.update(node, vm, exp, 'model');
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }

  modelUpdater(node, value) {
    node.value = value;
  }

  eventHandler(node, vm, exp, dir) {
    console.log(vm)
    const fn = vm.$options.methods && vm.$options.methods[exp];
    if(dir && fn) {
      node.addEventListener(dir, fn.bind(vm), false)
    }
  }

  isDirective(attr) {
    return attr.indexOf('g-') == 0
  }

  isEvent(attr) {
    return attr.indexOf('@') == 0
  }

  isElement(node) {
    return node.nodeType === 1
  }
  isInterpolation(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}