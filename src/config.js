require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  api: {
    host: process.env.APIHOST || 'http://api.marketcloud.it',
    token: 'c21274a7-d13b-41e3-b875-c848909aa648'
  },
  app: {
    title: 'Universal Marketcloud Storefront',
    description: 'All the modern best practices in one eCommerce storefront.',
    head: {
      titleTemplate: 'Universal Marketcloud Storefront: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one eCommerce storefront.'},
        {charset: 'utf-8'},
        {property: 'apple-mobile-web-app-capable', content: 'yes'},
        {property: 'apple-mobile-web-app-status-bar-style', content: 'black'},
        {property: 'og:site_name', content: 'Universal Marketcloud Storefront'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Universal Marketcloud Storefront'},
        {property: 'og:description', content: 'All the modern best practices in one eCommerce storefront.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@hkarkk'},
        {property: 'og:creator', content: '@hkarkk'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
