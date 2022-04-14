import React from 'react'
import GlobalStyles from './styles/global'
import Header from './components/header/index'
import Card from './components/card/index'
import ContainerBox from './components/container/index'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ContainerBox>
        <Card />
      </ContainerBox>
    </>
  )
}

export default App
