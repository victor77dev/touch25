export default function reducer(state= {
    loading: true
  }, action) {

  switch (action.type) {
    case 'LOADING': {
      return {...state, user: action.payload, login: true, loading: false}
    }
    default:
      // do nothing
  }
  return state;
}
