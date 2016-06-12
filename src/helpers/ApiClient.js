import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'delete'];

function formatUrl(path) {
  let adjustedPath = (path[0] !== '/') ? `/${path}` : path;
  adjustedPath = `/v0${adjustedPath}`;

  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return config.api.host + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return `/api${adjustedPath}`;
}

export default class ApiClient {
  constructor() {
    methods.forEach((method) => {
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) {
          request.query(params);
        }

        request.set('Content-Type', 'application/json');
        if (config.api.publicKey) {
          request.set('Authorization', config.api.publicKey);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => (err ? reject(body || err) : resolve(body)));
      });
    });
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty() {}
}
