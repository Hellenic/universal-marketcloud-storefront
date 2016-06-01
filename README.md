# Universal Marketcloud Storefront boilerplate

TODO Put shields here.

---

## About

This is an univesal eCommerce boilerplate (mostly for Marketcloud) I've put together using the following technologies:

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
* [bootstrap-sass-loader](https://github.com/shakacode/bootstrap-sass-loader) and [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize Bootstrap and FontAwesome
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server
* [mocha](https://mochajs.org/) to allow writing unit tests for the project.
* [React Essence](http://getessence.io/) to make all of that pretty.
* [Marketcloud](http://marketcloud.it) is the eCommerce platform beneath all this fancy looking stuff.

Me and my girlfriend were starting a webshop of our own and I took it for myself to build the technical capabilities. Since the idea was still taking shape, I didn't have any exact direction where to take the shop, so I started to work on general implementations towards Marketcloud. Finally, once the idea was final, I used this as a base to make the final version of the webshop.

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

## Demo

Still not quite there yet.

## Documentation

Still not quite there yet.

## FAQ

Still not quite there yet.

## Roadmap

Still not quite there yet.

## Contributing

I am more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :)

If you would like to submit a pull request, please make an effort to follow the guide in [CONTRIBUTING.md](CONTRIBUTING.md).

---
Cheers!

– Hannu Kärkkäinen, [@hkarkk](https://twitter.com/hkarkk)
