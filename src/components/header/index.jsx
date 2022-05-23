import React, { useContext } from 'react'
import { HeaderBox } from './style'
import { context } from '../../context/index'

const Header = props => {
  const ctx = useContext(context)
  return (
    <HeaderBox>
      <div>
        <h1>Games-E</h1>
        <h4>Itens: {ctx.total}</h4>
      </div>
    </HeaderBox>
  )
}

export default Header
