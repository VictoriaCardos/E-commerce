import React, { useContext, useState } from 'react'
import { HeaderBox } from './style'
import Modal from 'react-modal'
import Counter from '../counter'
import { context } from '../../context/index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import carrinho from '../../assets/cart2.svg'
import close from '../../assets/close.svg'

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
          <h1>E-Games</h1>
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
        <ul className="cartContent">
          {ctx.name.map(item => (
            <span className="product" key={item}>
              <li className="listGame">{item}</li>
              <Counter nameOfGame={item} />
            </span>
          ))}
        </ul>
        <h3>Total: {formattedAmount(ctx.nameCounter)}</h3>

        <button className="react-modal-close" onClick={closeModal}>
          <img className="close" src={close} alt="Cart" />
        </button>
        <div className="optionsButtons">
          <button onClick={closeModal}>Continue comprando!</button>
        </div>
      </Modal>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Header
