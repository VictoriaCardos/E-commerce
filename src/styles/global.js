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
    
    background-color: #808080 ;
    color: #00cc39;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    max-width: 1020px;
  }
  button {
    cursor: pointer;
  }
`
