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
      if(jQuery.type(selector) === 'string') {
        // 选择器
        const elements = document.querySelectorAll(selector);
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          this[i] = element;
        }
        this.length = elements.length;
      } else if(selector.nodeType) {
        // DOM元素
        this[0] = selector;
        this.length = 1
      }
    }
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

  //$.extend
  //  1、如果有一个参数，把参数对象里面的属性依次拷贝给$
  //      $.extend({ name:"abc",age:18 })
  //    -->$.name="abc"
  //    -->$.age=18
  //  2、如果有多个参数，把第二个参数及其后面的所有参数中的属性依次遍历给第一个参数
  //      var p={}
  //      $.extend(p,{a:10},{b:20},{c:30})
  //              p.a=10;
  //              p.b=20;
  //              p.c=30
  
  //$.fn.extend
  //  1、如果有一个参数，把参数对象中的属性依次遍历给$.fn
  //      $.fn.extend({ css:function(){},on:function(){} })
  //          $.fn.css=function(){}
  //          $.fn.on=function(){}
  //  2、如果有多个参数，功能等价于$.extend的第二个功能
  //      $.fn.extend(p,{a:10},{b:20},{c:30})
  //      $.extend(p,{a:10},{b:20},{c:30})
  //      -->p.a=10 p.b=20 p.c=30;

  //寻找共同点：
  //1、$.fn.extend和$.extend多参数功能是完全一样的
  //2、$.fn.extend和$.extend一个参数的功能其实都是为了把参数里面的属性依次便利给（this）

  //3、这2大功能最终的目的都是为了进行对象的拷贝——>实现拷贝继承-->思考：能不能重用拷贝的逻辑
  //  -->寻找共同点：
  //      1、都是为了拷贝
  //      2、拷贝其实只要确定了
  //          a、提供数据的对象  
  //          b、接收数据的对象
  //              第一大功能提供数据的对象：第二个参数及其后面的参数；接收数据的对象是第一个参数
  //              第二大功能提供数据的对象：第一个参数；接收数据的对象：this

  jQuery.extend = jQuery.fn.extend = function(...args) {
    const target = args.length === 1 
      ? this
      : (args.shift() || []);
    const source = args
    // source.forEach((item, index) => {
    //   // Object.keys(item).forEach((key) => {
    //   //   target[key] = item[key]
    //   // })
    //   Object.assign(target, item)
    // });
    // 等价上面代码
    Object.assign(target, ...source);
    return target
  }

  // 工具类方法
  jQuery.extend({
    each(obj, callback) {
      // 数组和伪数组两种情况
      // length属性，并且值 >=0
      if((length in obj) && obj.length >= 0) {
        for (let i = 0; i < obj.length; i++) {
          const o = obj[i];
          // callback(o, i);
          callback.call(o, o, i);
          // callback.apply(o, [o, i]);
        }
      } else {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const o = obj[key];
            // callback(o, key);
            callback.call(o, o, key);
          }
        }
      }
    },
    ajax(obj) {
      console.log('ajax')
      function createXHR() {
        const xhr = window.XMLHttpRequest 
          ? new XMLHttpRequest()
          : new ActiveXObject('Microsoft.XMLHTTP')
        return xhr
      }

      function params(data) {
        var arr = []
        data && Object.keys(data).forEach(key => {
          arr.push(`${key}=${data[key]}`)
        })
        return arr.join('&')
      }

      function callback() {
        // 判断http的交互是否成功，200表示成功
        if(xhr.status == 200) {
          // 回调传递参数
          obj.success(xhr.responseText);
        } else {
          obj.error("请求错误");
        }
      }

      const xhr = createXHR()

      // 将参数转为字符串
      obj.data = params(obj.data)

      // 判断请求
      if(obj.method === 'get') {
        obj.url += obj.url.indexOf('?') == -1
          ? `?${obj.data}`
          : `&${obj.data}`
      }

      // 同步
      if(obj.async === false) {
        callback()
      }

      //异步
      if(obj.async === true) {
        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4) {
            callback();
          }
        }
      }

      xhr.open(obj.method, obj.url, obj.async);

      if(obj.method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data);
      } else {
        xhr.send(null)
      }
    },
    type(obj) {
      const typeStr = Object.prototype.toString.call(obj);
      const typeArr = typeStr.split(' ')[1];
      return typeArr.substring(0, typeArr.length - 1).toLowerCase();
    }
  })

  // 将会保存曾经绑定过的所有事件处理的回调函数
  // 以DOM元素为区分
  const events = []

  // DOM操作方法
  jQuery.fn.extend({
    each(callback) {
      jQuery.each(this, callback);
      return this;
    },
    // 1.获取样式
    // 2.设置样式
    //  $('div').css('color', 'red')
    //  $('div').css({color: 'red', fontSize: '20px'})
    css(...args) {
      if(args.length === 1) {
        if(jQuery.type(args[0]) === 'string') {
          // 获取样式
          let firstDom = this[0];
          let domStyleObj = window.getComputedStyle(firstDom, null);
          return domStyleObj[args[0]]
        } else {
          // 设置多个样式
          // this.each(function() {
          //   jQuery.each(args[0], (item, key) => {
          //     this.style[key] = item
          //   })
          // })
          // 此处的this === jquery实例, 下面代码等价上面注释的代码
          jQuery.each(args[0], (item, key) => {
            this.css(key, item)
          })
        }
      } else {
        // 设置单个样式
        // this表示一个jquery实例对象
        return this.each(function() {
          // this表示一个DOM
          this.style[args[0]] = args[1]
        })
      }
    },
    show() {
      return this.css('display', 'block');
    },
    hide() {
      return this.css('display', 'none');
    },
    toggle() {
      // this.each((item) => {
      //   this.css('display', this.css('display') === 'block' ? 'none' : 'block');
      // })

      // 下面代码等于上面注释的代码
      this.each(function(item) {
        // jquery(this)都会产生一个jquery对象，
        // 而每一次产生一个新的jquery对象都会开辟一块新的内存
        // 而这里的dom元素是唯一的，所以造成一些不必要的内存浪费
        // 解决方案：如下
        const $this = jQuery(this);
        // $this.css('display') === 'block' ? $this.hide() : $this.show();

        // 解决方案二
        $this[$this.css('display') === 'none'? 'show' : 'hide']()
      })
    },
    attr() {
      console.log('attr')
    },
    on(type, callback) {
      this.each(function(element, index) {
        element.addEventListener(type, callback)
        events.push({
          element, // 或 this
          type,
          callback
        })
      })
      return this
    },
    off(type) {
      this.each(function(element, index) {
        // 遇到问题：并不能得到之前绑定事件的回调函数的地址
        // 解决方案：必须在之前绑定事件的时候，把事件回调函数的内存地址保存起来

        // 找到该元素曾经绑定过的type类型的事件
        const currentEvents = events.filter((item, index) => {
          return item.element == element && item.type === type
        })
        currentEvents.forEach((event) => {
          const { callback } = event
          element.removeEventListener(type, callback);
        })
      })
    }
  })

  global.$ = global.jQuery = jQuery
})(window)