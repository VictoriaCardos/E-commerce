import React, { useContext } from 'react'
import { HeaderBox } from './style'
import { context } from '../../context/index'
import carrinho from '../../assets/cart-test.svg'

const Header = props => {
  const ctx = useContext(context)
  return (
    <HeaderBox>
      <div>
        <h1>Games-E</h1>
        <div className="carrinho">
          <span>
            <img src={carrinho} alt="Cart" />
          </span>
          Itens: {ctx.total}
        </div>
      </div>
    </HeaderBox>
  )
}

export default Header
