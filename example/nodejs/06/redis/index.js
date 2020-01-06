const redis = require('redis')
const client = redis.createClient(6379, 'localhost')
client.set('name', 'robin')
client.get('name', (error, res) => {
  console.log('name: ', res)
})