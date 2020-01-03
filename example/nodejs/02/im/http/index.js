const express = require('express')
const app = express()
const http = require('http').Server(app)

const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json())

const list = ['ccc', 'ddd']

app.get('/', (request, response) => {
  response.sendFile(path.resolve('./index.html'))
})

app.get('/list', (request, response) => {
  response.end(JSON.stringify(list))
})

app.post('/send', (request, response) => {
  list.push(request.body.message)
  response.end(JSON.stringify(list))
})

app.post('/clear', (request, response) => {
  list.length = 0
  response.end(JSON.stringify(list))
})

app.listen(3100)