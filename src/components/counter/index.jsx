import React, { useState, useContext } from 'react'
import { Content } from './style'
import { context } from '../../context/index'

import addButton from '../../assets/add3.svg'
import removeButton from '../../assets/remove2.svg'

const Counter = props => {
  const [counter, setCounter] = useState(1)
  const ctx = useContext(context)

  function increment() {
    setCounter(count => count + 1)
  }

  function decrement() {
    if (counter > 1) {
      setCounter(count => count - 1)
    }
    if (counter === 1) {
      ctx.setTotal(ctx.total - 1)
      var arrayNames = ctx.name
      var indice = arrayNames.indexOf(props.nameOfGame)
      arrayNames.splice(indice, 1)
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
