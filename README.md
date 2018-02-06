# Universal Marketcloud Storefront boilerplate

[![build status](https://img.shields.io/travis/Hellenic/universal-marketcloud-storefront/master.svg?style=flat-square)](https://travis-ci.org/Hellenic/universal-marketcloud-storefront)
[![Dependency Status](https://david-dm.org/Hellenic/universal-marketcloud-storefront.svg?style=flat-square)](https://david-dm.org/Hellenic/universal-marketcloud-storefront)
[![devDependency Status](https://david-dm.org/Hellenic/universal-marketcloud-storefront/dev-status.svg?style=flat-square)](https://david-dm.org/Hellenic/universal-marketcloud-storefront#info=devDependencies)
[![Live demo](https://img.shields.io/badge/live-demo-brightgreen.svg?style=flat-square)](http://universal-marketcloud-storefront.karkk.ai/)

---

## About

This is an universal eCommerce boilerplate (mostly for Marketcloud) I've put together using the following technologies:

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* Both client and server make calls to load data from separate API server
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [React Router Redux](https://github.com/reactjs/react-router-redux) Redux/React Router bindings.
* [ESLint](http://eslint.org) to maintain a consistent code style
* [redux-form](https://github.com/erikras/redux-form) to manage form state in Redux
* [lru-memoize](https://github.com/erikras/lru-memoize) to speed up form validation
* [multireducer](https://github.com/erikras/multireducer) to combine single reducers into one key-based reducer
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize FontAwesome
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server
* [mocha](https://mochajs.org/) & [chai](http://chaijs.com/) to allow writing unit tests for the project.
* [Material UI](http://www.material-ui.com/) to make all of that pretty.
* [Marketcloud](http://marketcloud.it) is the eCommerce platform beneath all this fancy looking stuff.

I am planning to build a real webshop at some point, but since the idea was still taking shape so I started to work on general implementations towards Marketcloud. Finally, once the idea will be final, I will use this as a base to build that real shop.

In other words, this is kind of a boilerplate if you ever feel like building a stunning webshop of your own. It will offer huge variety of features what most, even the biggest, eCommerce storefronts won't offer, like super-fast and consistent user experience. Boilerplate is using Marketcloud, so if you are using that as well, you can get started very quickly. If not, then you'll just need to change all the API bindings and the logics related to it.

This project is based on awesome [react-redux-universal](https://github.com/erikras/react-redux-universal-hot-example) boilerplate by [@erikras](https://twitter.com/erikras). You can read from there what's actually contained in this project as well.

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

> The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.

## Building and Running Production Server

```bash
npm run build
npm run start
```

## Roadmap

First need to get the basics in shape, after that I might plan something further.

## Contributing

I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

---
Cheers!

– Hannu Kärkkäinen, [@hkarkk](https://twitter.com/hkarkk)
