const { osInfo } = require('./os')
const { showMem, showCpuUsagePercent } = require('./cpu')
var express = require("express")
var app = express()

let cpuUserPerson = 0
showCpuUsagePercent((error, res) => {
  console.log('res', res)
  cpuUserPerson = res
})

app.get('/',function(req,res) {
  const cpuInfo = `
  CPU占用率：${cpuUserPerson.toFixed(2)}%
  内存占用率：${showMem().toFixed(2)}%`
  // res.send(osInfo)
  res.send(cpuInfo)
})

app.listen(3100,function(){
  console.log('server is running')
})
