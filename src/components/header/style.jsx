import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: #31393c;
  border-bottom: 2px solid;

  div {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    position: absolute;
  }

  .carrinho {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    align-items: center;
    right: 30rem;
    position: absolute;
  }

  .subtotal {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-end;
    align-items: center;
    right: 13rem;
    position: absolute;
  }

  img {
    width: 2.4rem;
  }

  button {
    background: transparent;
    border: none;
  }
  .listGame {
    list-style: none;
    list-style-type: none;
  }
`
