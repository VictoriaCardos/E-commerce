import React, { useState, useContext } from 'react'
import { context } from '../../context/index'
import { Content } from './style'

const Counter = () => {
  const ctx = useContext(context)
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(count => count + 1)
    if (counter == 0) {
      ctx.setTotal(ctx.total + 1)
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter(count => count - 1)
    }
    if (counter == 1) {
      ctx.setTotal(ctx.total - 1)
    }
  }

  return (
    <Content>
      <h4>Quantidade: {counter}</h4>
      <span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </span>
    </Content>
  )
}

export default Counter
