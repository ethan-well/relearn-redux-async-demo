import React from 'react'

const Counter = ({ state, request }) => (
  <div>
    <button onClick={request}> Request </button>
    <div>
      <p>
        { state && state.isFetching ? '加载中....' : '加载完成' }
      </p>
      <ul className="list-style-custom">
        { state && state.posts
          ? state.posts.map((post, index) => (
            <li key={index + 1}>{index + 1}：{post}</li>
          ))
          : '尚无数据' }
      </ul>
    </div>
  </div>
)

export default Counter;