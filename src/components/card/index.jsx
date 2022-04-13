import React, { useState } from 'react'
import { CardGame, Conteudo, Footer } from './style'
import ajax from '../../services/api'

const Card = props => {
  const [data, setData] = useState([])

  ajax.addEventListener('readystatechange', getInfos, true)

  function getInfos() {
    if (isRequestOk()) {
      setData(JSON.parse(ajax.responseText))
      //dataGames = data
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
          <img src={require(`../../assets/${item.image}`)} alt={item.name} />
          <Conteudo>{item.name}</Conteudo>
          <Footer>{item.price}</Footer>
        </CardGame>
      ))}
    </>
  )
}

export default Card
