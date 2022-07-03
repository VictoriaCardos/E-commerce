import React, { createContext, useState } from 'react'

export const context = createContext(0)

export const ContextProvider = props => {
  const [data, setData] = useState([])
  const [total, setTotal] = useState(0)
  const [name, setName] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [nameCounter, setNameCounter] = useState(0)
  return (
    <context.Provider
      value={{
        data,
        total,
        name,
        subtotal,
        nameCounter,
        setData,
        setTotal,
        setName,
        setSubtotal,
        setNameCounter
      }}
    >
      {props.children}
    </context.Provider>
  )
}
