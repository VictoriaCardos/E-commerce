import React, { useState } from 'react'
import { CardGame } from './style'
import ajax from '../../services/api'
import KartContent from '../kartContent'

const Card = props => {
  const [data, setData] = useState([])

  ajax.addEventListener('readystatechange', getInfos, true)

  function getInfos() {
    if (isRequestOk()) {
      setData(JSON.parse(ajax.responseText))
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200
    }
  }

  return (
    <>
      {data.map(item => (
        <CardGame key={item.gameID}>
          <img src={item.thumb} alt={item.title} />
          <h2>{item.title}</h2>
          <h3>R${item.normalPrice}</h3>
          <KartContent nameOfGame={item.title} />
        </CardGame>
      ))}
    </>
  )
}

export default Card
