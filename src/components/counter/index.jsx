import React, { useState, useContext } from 'react'
import { Content } from './style'
import { context } from '../../context/index'

import addButton from '../../assets/add3.svg'
import removeButton from '../../assets/remove2.svg'
import trash from '../../assets/trash.svg'

const Counter = props => {
  const [counter, setCounter] = useState(1)
  const ctx = useContext(context)

  function increment() {
    setCounter(count => count + 1)
    totalSum()
  }

  function decrement() {
    if (counter > 1) {
      setCounter(count => count - 1)
      totalSubtraction()
    }
    if (counter === 1) {
      ctx.setTotal(ctx.total - 1)
      var arrayNames = ctx.name
      var indice = arrayNames.indexOf(props.nameOfGame)
      arrayNames.splice(indice, 1)
      subtotalSubtraction()
      totalSubtraction()
    }
  }

  function removeGame() {
    setCounter(counter - counter)
    ctx.setTotal(ctx.total - 1)
    var arrayNames = ctx.name

    subtotalSubtraction()

    var indice = arrayNames.indexOf(props.nameOfGame)
    arrayNames.splice(indice, 1)
    const name = props.nameOfGame
    ctx.data.map(item => {
      if (item.title === name) {
        var price = item.normalPrice
        var mult = price * counter
        ctx.setNameCounter(ctx.nameCounter - mult)
      }
    })
  }

  function subtotalSubtraction() {
    const name = props.nameOfGame
    ctx.data.map(item => {
      if (item.title === name) {
        var price = item.normalPrice
        ctx.setSubtotal(ctx.subtotal - Number(price))
      }
    })
  }
  function totalSum() {
    const name = props.nameOfGame
    ctx.data.map(item => {
      if (item.title === name) {
        var price = item.normalPrice
        var mult = price * counter
        ctx.setNameCounter(ctx.nameCounter + mult)
      }
    })
  }

  function totalSubtraction() {
    const name = props.nameOfGame
    ctx.data.map(item => {
      if (item.title === name) {
        var price = item.normalPrice
        ctx.setNameCounter(ctx.nameCounter - price)
      }
    })
  }

  return (
    <Content>
      <span>
        <button onClick={increment}>
          <img src={addButton} alt="Add to cart" />
        </button>
        <h4>{counter}</h4>
        <button onClick={decrement}>
          <img src={removeButton} alt="Decrement game" />
        </button>
        <button onClick={removeGame}>
          <img className="trash" src={trash} alt="Remove game" />
        </button>
      </span>
    </Content>
  )
}

export default Counter
