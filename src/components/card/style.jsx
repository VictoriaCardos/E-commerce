import styled from 'styled-components'

export const CardGame = styled.div`
  margin-top: 4rem;
  img {
    width: 15rem;
    height: 15rem;
  }

  height: 48vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #696969;
  box-shadow: 3px 3px #696969, -1em 0 0.4em #696969;

  button img {
    width: 3rem;
    height: 3rem;
  }
  button {
    background-color: #075c1f;
    border: none;
    border-radius: 5px;
  }

  span button {
    width: 4rem;
  }
`
export const Conteudo = styled.div`
  display: flex;
`
export const Footer = styled.div`
  display: flex;
`
