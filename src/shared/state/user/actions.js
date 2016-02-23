import fetch from '../../util/fetch-proxy';
import { push } from 'react-router-redux';

export function login() {
  return dispatch => {
    return fetch()('http://localhost:8000/api/login')
      .then((response)=>{window.location = response.url;})
      .catch(dispatch(loginError()))
  }
}

function loginError() {
  return {
    type: 'LOGIN_ERROR',
  }
}

export function logout() {
  return dispatch => {
    return fetch()('http://localhost:8000/api/logout')
      .then((response)=>{
        dispatch(logoutSuccess());
        dispatch(push('/'));
      })
      .catch(dispatch(logoutError()))
  }
}

function logoutError() {
  return {
    type: 'LOGOUT_ERROR',
  }
}

function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS',
    user: null
  }
}
