const { override, fixBabelImports } = require('customize-cra')
module.exports = function override(config, evn) {
  fixBabelImports('import',{
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
  return config;
}