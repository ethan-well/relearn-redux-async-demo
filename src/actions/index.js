import React from 'react';

export const fetchPosts = () => (dispatch, action) => {
  dispatch(requestPosts);
  return fetch(`http://yapi.demo.qunar.com/mock/43392/test/posts`)
    .then(response => response.json())
    .then(json => {
      dispatch(receivePosts(json))}
    )
    .catch(error => dispatch(fetchError(error)))
}

export const receivePosts = (json) => ({
  type: "RECEIVE_POSTS",
  posts: json.posts.map(post => post.content)
})

export const fetchError = (error) => ({
  type: 'FETCH_ERROR',
  message: error
})

export const requestPosts = {
  type: 'START_REQUEST'
}
