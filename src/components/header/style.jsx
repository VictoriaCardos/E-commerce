import styled from 'styled-components'

export const HeaderBox = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #2c2c2c;

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
`
