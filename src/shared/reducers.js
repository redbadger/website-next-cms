import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import user from './state/user';

const rootReducer = combineReducers({
  routing: routeReducer,
  user
});

export default rootReducer;
