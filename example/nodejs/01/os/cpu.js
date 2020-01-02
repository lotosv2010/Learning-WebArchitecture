const os = require('os')
const cpu = require('cpu-stat')

module.exports.showMem = () => {
  const mem = os.freemem() / os.totalmem() * 100
  return mem
}

module.exports.showCpuUsagePercent = cpu.usagePercent