const fs = require('fs')
var express = require("express")
const { promisify } = require('util')

var app = express()

async function read() {
  const readFile = promisify(fs.readFile)
  try {
    const data = await readFile('./json/data.json')
    return JSON.parse(data.toString())
  } catch (error) {
    return error
  }
}

app.get('/',function(req,res) {
  // 1.------
  // const data = fs.readFileSync('./json/data.json')
  // res.send(JSON.parse(data.toString()))

  // 2.------
  // fs.readFile('./json/data.json', (error, data) => {
  //   res.send(JSON.parse(data.toString()))
  // })
  
  // 3.------
  read().then(response => {
    res.send(response)
  })
})

app.listen(3100,function(){
  console.log('server is running')
})