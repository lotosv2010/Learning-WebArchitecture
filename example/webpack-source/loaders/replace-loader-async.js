const loaderUtils = require('loader-utils')

module.exports = function(source) {
  // source就是源文件的内容
  let res = source
  const options = loaderUtils.getOptions(this)
  const { timer, searchValue , replaceValue } = options
  if(searchValue != undefined && replaceValue != undefined) {
    res = source.replace(searchValue, replaceValue)
  }

  const callback = this.async()
  setTimeout(() => {
    callback(null, res)
  }, timer);
}