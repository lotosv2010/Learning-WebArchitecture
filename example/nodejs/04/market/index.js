const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./models/db')
const data = require('./models/data')

app.get('/', (request, response) => {
  response.sendFile(path.resolve('./index.html'))
})

app.get('/api/list', async (req, res) => {
  // 分页查询
  const page = +req.query.page;
  try {
    const col = mongo.col('foods');
    const total = await col.find().count();
    const fruits = await col
      .find()
      .skip((page - 1) * 5)
      .limit(5)
      .toArray();
    res.json({ ok: 1, data: { fruits, pagination: { total, page } } });
  } catch (error) {
    console.log(error);
  }
});

app.get('/api/category', (req, res) => {
  res.end(JSON.stringify(list));
});

app.listen(3100);