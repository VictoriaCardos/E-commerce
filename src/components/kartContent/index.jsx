import React, { useState, useContext } from 'react'
import { context } from '../../context/index'
import { Content } from './style'
import addCart from '../../assets/addCart.svg'
import removeCart from '../../assets/removeCart2.svg'

const KartContent = props => {
  const ctx = useContext(context)
  const [game, setGame] = useState(0)

  function addToCart() {
    if (game === 0) {
      const gameCopy = Array.from(ctx.name)
      gameCopy.push(props.nameOfGame)
      ctx.setName(gameCopy)
      ctx.setTotal(ctx.total + 1)
      setGame(game + 1)
    }
    console.log(game, ctx.name)
  }

  function removeToCart() {
    if (game === 1) {
      const gameCopy = Array.from(ctx.name)
      var arrayNames = gameCopy
      var indice = arrayNames.indexOf(props.nameOfGame)
      if (indice !== -1) {
        arrayNames.splice(indice, 1)
        setGame(game - 1)
        ctx.setTotal(ctx.total - 1)
      }
    }
  }

  return (
    <Content>
      <span>
        <button onClick={addToCart}>
          <img src={addCart} alt="" />
        </button>
        <button onClick={removeToCart}>
          <img src={removeCart} alt="" />
        </button>
      </span>
    </Content>
  )
}

export default KartContent
