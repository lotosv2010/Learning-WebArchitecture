(function(global) {
  function jQuery(selector) {
    // 1.获取页面中所有的元素
    // 2.把这个元素放在一个特定的对象中

    // 这样的话，随着$()操作频次的增加，会产生无数个相同的css方法，造成内存浪费
    return new jQuery.fn.init(selector)
  }

  // 给jquery添加一个fn属性，fn属性等价于prototype属性
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function(selector) {
      const elements = document.querySelectorAll(selector);
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        this[i] = element;
      }
      this.length = elements.length;
    },
    css(name, value) {
      for (let i = 0; i < this.length; i++) {
        const element = this[i];
        element.style[name] = value
      }
    },
  }

  // 此时创建的jquery是init构造函数的实例
  // css方法在jquery.prototype对象中
  // --> 为了让jquery对象可以访问到css方法
  // ----> 让init原型继承自jquery的原型

  jQuery.fn.init.prototype = jQuery.fn;

  // --> 1.创建了一个init的对象
  // --> 2.执行css方法
  // ----> 找对象本身有没有css方法，并没有
  // ----> 找对象的原型：init.prototype --> jquery.prototype
  // ----> 发现jquery.prototype对象中有一个css方法


  // exrend方法：
  // fn.extend方法：编写jquery插件的核心方法
  // 两个方法的区别：
  // 1.接受数据的对象发生了变化
  // --> $.extend: 第一个实参
  // --> $.fn.extend: this
  // 2.数据源对象发生了变化
  // --> $.extend: 第二个参数及其后面的参数
  // --> $.fn.extend: 所有的参数
  jQuery.extend = jQuery.fn.extend = function(...args) {
    let target = {};
    let source = [];
    // $.extend
    if(this === jQuery) {
      target = args.shift() || {};
      source = args;
    } else { // $.fn.extend
      target = this;
      source = args;
    }
    source.forEach((item, index) => {
      Object.keys(item).forEach((key) => {
        target[key] = item[key]
      })
    });
    return target
  }

  global.$ = global.jQuery = jQuery
})(window)