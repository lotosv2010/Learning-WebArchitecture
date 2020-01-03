const net = require('net')
const chartServer = net.createServer()
const clientList = []

chartServer.on('connection', client => {
  client.write('Hi\n')
  clientList.push(client)
  client.on('data', data => {
    console.log('receive:', data.toString())
    clientList.forEach(v => {
      v.write(data)
    })
  })
})

chartServer.listen(9000)