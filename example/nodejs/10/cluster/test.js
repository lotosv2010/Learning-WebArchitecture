var http = require('http')
setInterval(async () => {
  try {
    await http.get('http://localhost:3100')
    // console.log('go')
  } catch (error) {
    console.log(error)
  }
}, 3000);