import React from 'react'

const Counter = ({ sum, add }) => (
  <div>
    <span>{sum}</span>
    <button onClick={add}> Search </button>
  </div>
)

export default Counter;