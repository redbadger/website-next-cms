import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import jobs from './actions/users';

const rootReducer = combineReducers({
  jobs,
  routing: routeReducer
});

export default rootReducer;
