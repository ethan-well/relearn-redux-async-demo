import React from 'react'

const Counter = ({ sum, add }) => (
  <div>
    <span>{sum}</span>
    <button onClick={add}> + </button>
  </div>
)

export default Counter;