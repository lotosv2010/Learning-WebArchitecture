const fs = require('fs')
const path = require('path')

module.exports = (dirPath = './public') => {
  return async (ctx, next) => {
    console.log(ctx.url, dirPath)
    if (ctx.url.indexOf("/public") === 0) {
      // public开头 读取⽂件
      const url = path.resolve(__dirname, dirPath)
      const fileBaseName = path.basename(url)
      const filepath = `${url}${ctx.url.replace('/public', '')}`
      // console.log(ctx.url,url, filepath, fileBaseName)
      try {
        const stats = fs.statSync(filepath)
        if (stats.isDirectory()) {
          const dir = fs.readdirSync(filepath)
          const ret = ['<div style="padding-left:20px">']
          dir.forEach(filename => {
            console.log(filename)
            // 简单认为不带小数点的格式，就是文件夹，实际应该用statSync
            if (filename.indexOf(".") > -1) {
              ret.push(
                `<p><a style="color:black" href="${
                  ctx.url }/${filename}">${filename}</a></p>
                `
              ) 
            } else {
              // 文件
              ret.push(
                `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
                )
            }
          })
          ret.push('</div>')
          ctx.body = ret.join("")
        } else {
          console.log("文件")
          const content = fs.readFileSync(filepath)
          ctx.body = content
        }
      } catch (error) {
        // 报错了 ⽂件不存在
        ctx.body = '404, not found'
      }
    } else {
      await next()
    }
  } 
}