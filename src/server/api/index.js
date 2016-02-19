import express from 'express';
import Routes from './routes';

export default function API (auth) {
  const self = express();
  const routes = new Routes(auth);

  self.get('/login', routes.login);
  self.get('/auth', routes.authenticate);

  return self;
}
