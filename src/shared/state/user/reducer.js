export default function user (state = {}, action) {
  switch (action.type) {
    case 'FETCH_ERROR':
      return state;

    default:
      return state
  }
}
