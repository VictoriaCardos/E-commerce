import React, { useState, useContext } from 'react'
import { context } from '../../context/index'
import { Content } from './style'

import addButton from '../../assets/add3.svg'
import removeButton from '../../assets/remove2.svg'

const Counter = props => {
  const ctx = useContext(context)
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(count => count + 1)
    if (counter === 0) {
      const gameCopy = Array.from(ctx.name)
      ctx.setTotal(ctx.total + 1)
      gameCopy.push(props.nameOfGame)
      ctx.setName(gameCopy)
      console.log(ctx.name)
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter(count => count - 1)
    }
    if (counter === 1) {
      ctx.setTotal(ctx.total - 1)
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
