export default function user (state = {}, action) {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return state;
    case 'LOGOUT_ERROR':
      return state;
    case 'LOGOUT_SUCCESS':
      console.log(state);
      return action.user;

    default:
      return state
  }
}
