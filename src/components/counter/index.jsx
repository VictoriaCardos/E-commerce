import React, { useState } from 'react'
import { Content } from './style'

import addButton from '../../assets/add3.svg'
import removeButton from '../../assets/remove2.svg'

const Counter = props => {
  const [counter, setCounter] = useState(1)

  function increment() {
    setCounter(count => count + 1)
  }

  function decrement() {
    if (counter > 0) {
      setCounter(count => count - 1)
    }
  }

  return (
    <Content>
      <span>
        <button onClick={increment}>
          <img src={addButton} alt="Add to cart" />
        </button>
        <h4>{counter}</h4>
        <button onClick={decrement}>
          <img src={removeButton} alt="Remove game" />
        </button>
      </span>
    </Content>
  )
}

export default Counter
