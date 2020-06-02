const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
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
