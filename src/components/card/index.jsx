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
      console.log(data)
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200
    }
  }

  return (
    <>
      {data.map(item => (
        <CardGame key={item.id}>
          <h2>{item.name}</h2>
          <img src={require(`../../assets/${item.image}`)} alt={item.name} />
          <h3>{item.price}</h3>
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
