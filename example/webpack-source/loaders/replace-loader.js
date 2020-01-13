const loaderUtils = require('loader-utils')

module.exports = function(source) {
  // source就是源文件的内容
  const options = loaderUtils.getOptions(this)
  const { searchValue , replaceValue } = options
  if(searchValue != undefined && replaceValue != undefined) {
    return source.replace(searchValue, replaceValue)
  } else {
    return source
  }
}