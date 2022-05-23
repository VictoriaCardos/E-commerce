import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(count => count + 1)
  }

  function decrement() {
    if (counter > 0) {
      setCounter(count => count - 1)
    }
  }

  return (
    <div>
      <h4>Quantidade: {counter}</h4>
      <span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </span>
    </div>
  )
}

export default Counter
