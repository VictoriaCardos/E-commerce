import React, { useContext, useState } from 'react'
import { HeaderBox } from './style'
import Modal from 'react-modal'
import Counter from '../counter'
import { context } from '../../context/index'

import carrinho from '../../assets/cart2.svg'

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const ctx = useContext(context)

  function openModal() {
    setIsOpen(true)
    ctx.setNameCounter(ctx.subtotal)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function formattedAmount(item) {
    item = item.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    if (item === '-R$ 0,00' || item === 'R$ 0,00') {
      item = 'Selecione um jogo!'
    }
    return item
  }

  return (
    <>
      <HeaderBox>
        <div>
          <h1>Games-E</h1>
          <div className="carrinho">
            <span>
              <button onClick={openModal}>
                <img src={carrinho} alt="Cart" />
              </button>
            </span>
            Itens: {ctx.total}
          </div>
          <div className="subtotal">
            Subtotal: {formattedAmount(ctx.subtotal)}
          </div>
        </div>
      </HeaderBox>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        contentLabel="Example Modal"
      >
        <h3>Produtos selecionados por você:</h3>
        <ul>
          {ctx.name.map(item => (
            <div key={item}>
              <li>{item}</li>
              <Counter nameOfGame={item} />
            </div>
          ))}
        </ul>
        <h3>Total: {formattedAmount(ctx.nameCounter)}</h3>

        <button className="react-modal-close" onClick={closeModal}>
          Fechar
        </button>
        <div className="optionsButtons">
          <button onClick={closeModal}>Continue comprando!</button>
        </div>
      </Modal>
    </>
  )
}

export default Header
