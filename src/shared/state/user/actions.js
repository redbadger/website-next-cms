import fetch from '../../util/fetch-proxy';

export function fetchLogin() {
  return dispatch => {
    return fetch()('http://localhost:8000/api/login')
      .then((response)=>{window.location = response.url;})
      .catch(dispatch(fetchError()))
  }
}

function fetchError() {
  return {
    type: 'FETCH_ERROR',
  }
}
