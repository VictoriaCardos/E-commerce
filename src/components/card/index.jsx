import React, { useState } from 'react'
import { CardGame } from './style'
import ajax from '../../services/api'

//import cart from '../../assets/cart-icon.svg'

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
          <h3>{item.normalPrice}</h3>
          <h4>Quantidade:</h4>
          <span>
            <button>+</button>
            <button>-</button>
          </span>
        </CardGame>
      ))}
    </>
  )
}

export default Card
