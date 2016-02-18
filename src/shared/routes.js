import React from 'react';
import Root from './containers/root';
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import { Route } from 'react-router';
import HttpError from './util/http-error';
import './containers/error';

const routeFn = (store, args, ...children) => {
  if (args.component && args.component.fetchData) {
    args = {
      ...args,
      onEnter: (nextState, replaceState, done) => {
        args.component
          .fetchData(store.dispatch, store.getState, nextState)
          .then((response) => {
            if (response && ((response instanceof HttpError) || response.error)) {
              done(response.error || response);
            } else {
              done();
            }
          });
      }
    };
  }

  return (
    <Route key={args.path} {...args}>{children}</Route>
  );
};

export default function routes (store) {
  const route = routeFn.bind(null, store);
  return (
      route({ component: Root },
      route({ component: Login, path: '/' }),
      route({ component: Dashboard, path: '/dashboard' })
    )
  );
}
