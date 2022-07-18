import React, { useContext } from 'react'
import { context } from '../../context/index'
import { Content } from './style'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import addCart from '../../assets/addCart.svg'
import removeCart from '../../assets/removeCart2.svg'

const KartContent = props => {
  const ctx = useContext(context)

  function addToCart() {
    var arrayNames = ctx.name
    var indice = arrayNames.indexOf(props.nameOfGame)
    if (indice === -1) {
      const gameCopy = Array.from(ctx.name)
      gameCopy.push(props.nameOfGame)
      ctx.setName(gameCopy)
      ctx.setTotal(ctx.total + 1)
      subtotalSum()
    } else {
      toast.info(`${props.nameOfGame} já foi adicionado!`)
    }
  }

  function removeToCart() {
    var arrayNames = ctx.name
    var indice = arrayNames.indexOf(props.nameOfGame)
    if (indice !== -1) {
      arrayNames.splice(indice, 1)
      ctx.setTotal(ctx.total - 1)
      subtotalSubtraction()
    } else {
      toast.warn(`${props.nameOfGame} não está no seu carrinho!`)
    }
  }

  function subtotalSum() {
    ctx.setSubtotal(ctx.subtotal + props.priceOfGame)
    toast.success(`${props.nameOfGame} foi adicionado ao carrinho!`)
  }

  function subtotalSubtraction() {
    ctx.setSubtotal(ctx.subtotal - props.priceOfGame)

    toast.error(`${props.nameOfGame} foi removido do carrinho!`)
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
