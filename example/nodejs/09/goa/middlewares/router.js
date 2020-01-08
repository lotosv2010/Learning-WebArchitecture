class Router {
  constructor() {
    this.stack = [];
  }

  register(path, methods, middleware) {
    let route = { path, methods, middleware }
    this.stack.push(route);
  }
  // 现在只支持get和post，其他的同理
  get(path, middleware) {
    this.register(path, 'get', middleware);
  }
  post(path, middleware) {
    this.register(path, 'post', middleware);
  }
  routes() {
    let stock = this.stack;
    console.log(stock)
    return async function (ctx, next) {
      let currentPath = ctx.url;
      let route;
      for (let i = 0; i < stock.length; i++) {
        let item = stock[i];
        console.log(currentPath, item.path, item.methods, ctx.methods)
        if (currentPath === item.path && item.methods.indexOf(ctx.method) >= 0) {
          // 判断path和method
          route = item.middleware;
          break;
        }
      }
      console.log('route', route)
      if (typeof route === 'function') {
        route(ctx, next);
        return;
      }
      await next();
    };
  }
}
module.exports = Router;