import { createGlobalStyle } from 'styled-components'

//import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    background: #ACCBE1;
    color: #979B8D;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
  }

  .react-modal-overlay {
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
}
.react-modal-content {
  border: 2px solid;
  width: 100%;
  max-width: 576px;
  background: #31393c;
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
}

.product {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }

  .cartContent {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .close {
    width: 2rem;
  }

  .buttonKeepBuy {
    background: #ff7a00;
    border: none;
    border-radius: 4px;
    padding: 0.4rem;
    margin-top: 0.5rem;
    color: #31393c;
    

    &:hover {
    background: #e26f04ca;
    transition-duration: 1s;
    
  }
  }
`
