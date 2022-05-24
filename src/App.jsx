import React from 'react'
import GlobalStyles from './styles/global'
import { ContextProvider } from './context/index'
import Header from './components/header/index'
import Card from './components/card/index'
import ContainerBox from './components/container/index'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const App = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Header />
      <ContainerBox>
        <Card />
      </ContainerBox>
    </ContextProvider>
  )
}

export default App
