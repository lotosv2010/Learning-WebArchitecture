(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"118":function(e,t,a){},"80":function(e,t,a){"use strict";a.r(t),function(e){var o,n=a(1),r=a.n(n),c=a(0),l=a.n(c),s=a(26),i=a(122),u=a(107),m=a(124),p=a(106),f=a(121),d=a(102),h=a(119),g=a(99),b=(a(118),a(14)),y=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}console.log(e),t.default=Object(b.b)("cartStore")(o=Object(b.c)(o=function(t){function Home(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Home);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,e));return t.config={"enablePullDownRefresh":!0},t.loadMore=function(){t.page=t.page+1,t.getGoods(!0)},t.addCart=function(e){t.props.cartStore.addCart(e)},t.page=1,t.state={"isH5":!0,"top":[],"goods":[],"hasMore":!1},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Home,r.a.Component),y(Home,[{"key":"onPullDownRefresh","value":function onPullDownRefresh(){this.getGoods()}},{"key":"onReachBottom","value":function onReachBottom(){console.log(""),this.state.hasMore&&this.loadMore()}},{"key":"componentDidMount","value":function componentDidMount(){var t=this;e.getData("api/top").then(function(e){t.setState({"top":e})}),this.getGoods()}},{"key":"getGoods","value":function getGoods(t){var a=this;e.getData("api/goods?page="+this.page).then(function(e){t?a.setState({"goods":[].concat(_toConsumableArray(a.state.goods),_toConsumableArray(e))}):(a.page=1,a.setState({"goods":e})),a.setState({"hasMore":10===e.length})})}},{"key":"render","value":function render(){var t=this;return console.log(this.state),l.a.createElement(s.a,{"className":"index"},this.state.isH5?l.a.createElement(m.a,{"title":"开课吧"}):null,l.a.createElement(i.a,{"className":"swiper-container","indicatorActiveColor":"#e93b3d","interval":5e3,"circular":!0,"indicatorDots":!0,"autoplay":!0},this.state.top.map(function(t){return l.a.createElement(i.b,null,l.a.createElement(u.a,{"className":"swiper-img","mode":"aspectFit","src":e.url+"course/"+t.img}))})),l.a.createElement(s.a,{"style":"margin-top:10px"},this.state.goods.map(function(a){var o=a.solded>200?e.url+"fire.png":"";return l.a.createElement(p.a,{"title":a.name,"note":"课程简介简介简介课程简介简介简介课程简介简介简介课程简介简介简介","extra":"￥"+a.price,"thumb":o},l.a.createElement(s.a,{"className":"at-row"},l.a.createElement(s.a,{"className":"at-col at-col-4"},l.a.createElement(u.a,{"mode":"aspectFit","className":"card-img","src":e.url+"course/"+a.img})),l.a.createElement(s.a,{"className":"at-col at-col-7"},l.a.createElement(s.a,null,"已有",a.solded,"人购买"),l.a.createElement(s.a,null,l.a.createElement(f.a,{"value":a.tag}))),l.a.createElement(s.a,{"className":"at-col at-col-1"},l.a.createElement(d.a,{"onClick":function onClick(){return t.addCart(a)},"value":"add","color":"#e93b3d","size":"30"}))))})),this.state.hasMore?l.a.createElement(s.a,null,this.state.isH5?l.a.createElement(h.a,{"onClick":this.loadMore}):null):l.a.createElement(g.a,{"content":"没有更多了","color":"#e93b3d"}))}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Home}())||o)||o}.call(this,a(5))}}]);