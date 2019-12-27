export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
      return state;
  }
};

// action creator
export const add = () => ({ type: 'INCREMENT'})
export const minus = () => ({ type: 'DECREMENT' })
export const asyncAdd = () => dispatch => {
  // 做异步操作
  setTimeout(() => {
    dispatch({ type: 'INCREMENT' })
  }, 2000)
}