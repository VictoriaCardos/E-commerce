import React from 'react'
import GlobalStyles from './styles/global'
import ajax from './services/api'

const App = () => {
  ajax.addEventListener('readystatechange', getInfos, true)

  function getInfos() {
    if (isRequestOk()) {
      var data = JSON.parse(ajax.responseText)

      console.log(data)
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200
    }
  }

  return (
    <>
      <GlobalStyles />
      <h1>teste</h1>
    </>
  )
}

export default App
