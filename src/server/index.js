import * as config from './config';
import express from 'express';
import router from './router';

const app = express();

app.use(express.static('static'));

app.use('/assets', express.static('build/assets'));

app.use(router);

if (!config.hot) {
  app.listen(config.port, function () {
    console.log('Server listening on port', config.port);
  });
}

export default app;
