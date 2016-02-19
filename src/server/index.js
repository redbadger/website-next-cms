import * as config from './config';
import express from 'express';
import router from './router';
import API from './api';
import Auth from './api/auth';
import fetch from '../shared/util/fetch-proxy';

const auth = new Auth(fetch(), config.google.clientId, config.google.secret);
const api = API(auth);

const app = express();

app.use(express.static('static'));

app.use('/assets', express.static('build/assets'));

app.use('/api', api);

app.use(router);

if (!config.hot) {
  app.listen(config.port, function () {
    console.log('Server listening on port', config.port);
  });
}

export default app;
