// 创建
const buf1 = Buffer.alloc(10)
const buf2 = Buffer.from([1, 2, 3])
const buf3 = Buffer.from('Buffer创建方法')
// 写入
buf1.write('hello')
// 读取
console.log(buf3.toString())
// 合并
const buf4 = Buffer.concat([buf1, buf3])
console.log(buf4.toString())