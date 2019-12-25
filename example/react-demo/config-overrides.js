const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
// const { injectBabelPlugin } = require('react-app-rewired')
// module.exports = function override(config) { config = injectBabelPlugin(
//   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
// config, )
// config = injectBabelPlugin( ['@babel/plugin-proposal-decorators', { "legacy": true }], config,
// )
// return config
// }
// module.exports = function override(config, evn) {
//   fixBabelImports('import',{
//     libraryName: 'antd',
//     libraryDirectory: 'es',
//     style: 'css'
//   })

//   addDecoratorsLegacy();

//   return config;
// }
module.exports=override(
  fixBabelImports('import',{
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addDecoratorsLegacy()
);