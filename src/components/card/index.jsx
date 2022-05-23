import React, { useState } from 'react'
import { CardGame } from './style'
import ajax from '../../services/api'
import Counter from '../counter'

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
          <h2>{item.title}</h2>
          <img src={item.thumb} alt={item.title} />
          <h3>R${item.normalPrice}</h3>
          <Counter />
        </CardGame>
      ))}
    </>
  )
}

export default Card
