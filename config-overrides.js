const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra')
module.exports = override(
  addBabelPlugin('babel-plugin-istanbul'),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: false //Set to false to not import css dynamically since we import less file directly in App.less
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        //"@layout-body-background": "#ffffff"
      }
      //modifyVars: darkTheme.default
    }
  })
)
