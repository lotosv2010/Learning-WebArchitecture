const os = require('os')

module.exports.osInfo = {
  // 操作系统特定的行末标志
  'os.EOL': os.EOL,
  // 操作系统的 CPU 架构
  'os.arch': os.arch(),
  // 操作系统特定的常量
  'os.constants': os.constants,
  // 逻辑 CPU 内核的信息
  'os.cpus': os.cpus(),
  // CPU 的字节序
  'os.endianness': os.endianness(),
  // 空闲的系统内存量以字节为单位）
  'os.freemem': os.freemem(),
  // 系统的内存总量
  'os.totalmem': os.totalmem(),
  // 指定的进程的调度优先级,如果未提供 pid 或者为 0，则返回当前进程的优先级
  'os.getPriority': os.getPriority(),
  // 当前用户的主目录的字符串路径
  'os.homedir': os.homedir(),
  // 操作系统的主机名
  'os.hostname': os.hostname(),
  // 平均负载
  'os.loadavg': os.loadavg(),
  // 已分配了网络地址的网络接口
  'os.networkInterfaces': os.networkInterfaces(),
  // 操作系统平台
  'os.platform': os.platform(),
  // 操作系统
  'os.release': os.release(),
  // 'os.setPriority([pid, ]priority)': os.setPriority()
  // 操作系统的默认临时文件目录
  'os.tmpdir': os.tmpdir(),
  // 系统的正常运行时间（以秒为单位）
  'os.uptime': os.uptime(),
  // 当前有效用户的信息
  'os.userInfo([options])': os.userInfo()
}
