const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    "my.main": "/my",
    "my.booking": "/booking",
    "my.item.info": "/item/:itemId"
  },
  features: {
    'my': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "my.api": "/api"
  }
}
