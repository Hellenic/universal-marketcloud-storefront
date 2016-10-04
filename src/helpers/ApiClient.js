import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

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
      this[method] = (path, { params, data, token } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));
        if (params) {
          request.query(params);
        }

        request.set('Content-Type', 'application/json');
        if (config.api.publicKey) {
          const authKey = (token) ? `${config.api.publicKey}:${token}` : config.api.publicKey;
          request.set('Authorization', authKey);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => (err ? reject(body || err) : resolve(body)));
      });
    });
  }
}
