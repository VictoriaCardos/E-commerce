import React, { useContext, useState } from 'react'
import { HeaderBox } from './style'
import Modal from 'react-modal'
import { context } from '../../context/index'

import carrinho from '../../assets/cart2.svg'

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const ctx = useContext(context)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
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
            <li key={Math.random(100)}>{item}</li>
          ))}
        </ul>

        <button className="react-modal-close" onClick={closeModal}>
          Fechar
        </button>
        <div className="optionsButtons">
          <button>Sim!</button>
          <button onClick={closeModal}>Não!</button>
        </div>
      </Modal>
    </>
  )
}

export default Header
