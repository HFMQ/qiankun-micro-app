const packageName = require('./package.json').name;
module.exports = {
  devServer: {
    port: 7300,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  configureWebpack: {
    output: {
      library: `microFapp`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
};