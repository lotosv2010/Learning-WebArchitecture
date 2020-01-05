(async () => {
  const mysql = require('mysql2/promise')

  // 链接配置
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'LEARNNODEJS'
  }

  const conn = await mysql.createConnection(cfg)

  let ret = await conn.execute(`
    CREATE TABLE IF NOT EXISTS test (
      id INT NOT NULL AUTO_INCREMENT,
      message VARCHAR(45) NULL,
  PRIMARY KEY (id))
  `)

  ret = await conn.execute(`
    INSERT INTO test(message) VALUES(?)
  `,['ABC'])

  ret = await conn.execute(`
    SELECT * FROM test
  `)
  console.log(JSON.stringify(ret[0]))

  conn.end()
})()