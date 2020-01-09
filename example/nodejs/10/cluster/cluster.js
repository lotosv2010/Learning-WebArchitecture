const cluster = require('cluster')
const os = require('os') // 获取CPU的数量
const numCPUs = os.cpus().length
const process = require('process')

console.log('cpu number:', numCPUs)

const workers = {}
if(cluster.isMaster) {
  // 住进程分支
  cluster.on('death', worker => {
    // 当一个工作进程结束时，重启工作进程 
    // delete workers[worker.pid]
    worker = cluster.fork()
    workers[worker.pid] = worker
  })

  // 初始开启与cpu数量相同的工作进程
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork()
    workers[worker.pid] = worker
  }
} else {
  // 工作进程分支，启动服务器
  const app = require('./index')
  app.use(async (ctx, next) => {
    console.log(`worker: ${cluster.worker.id}, PID: ${process.pid}`)
    next()
  })
  app.listen(3100)
}


// 当住进程被终止时，关闭所有工作进程
process.on('SIGTERM', () => {
  for(var pid in workers) {
    process.kill(pid)
  }
  process.exit(0)
})

require('./test')