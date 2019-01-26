import React from 'react';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_ERROR':
      return Object.assign({}, state, {
        fetchError: true
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts
      })
    default:
      state
  }
}

export default reducer;