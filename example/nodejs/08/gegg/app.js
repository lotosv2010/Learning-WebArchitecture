const app = new (require('./index'))()
app.start(3100, () => {
  console.log('服务器已启动，端口为3100')
})