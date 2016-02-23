import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import user from './user/reducer';

const rootReducer = combineReducers({
  routing: routeReducer,
  user
});

export default rootReducer;
