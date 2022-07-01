import React, { useContext } from 'react'
import { CardGame } from './style'
import ajax from '../../services/api'
import KartContent from '../kartContent'
import { context } from '../../context/index'

const Card = props => {
  const ctx = useContext(context)

  ajax.addEventListener('readystatechange', getInfos, true)

  function getInfos() {
    if (isRequestOk()) {
      ctx.setData(JSON.parse(ajax.responseText))
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200
    }
  }
  function formattedAmount(item) {
    item = item.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return item
  }

  return (
    <>
      {ctx.data.map(item => (
        <CardGame key={item.gameID}>
          <img src={item.thumb} alt={item.title} />
          <h2>{item.title}</h2>
          <h3>{formattedAmount(Number(item.normalPrice))}</h3>
          <KartContent
            priceOfGame={Number(item.normalPrice)}
            nameOfGame={item.title}
          />
        </CardGame>
      ))}
    </>
  )
}

export default Card
