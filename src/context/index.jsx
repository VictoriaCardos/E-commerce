import React, { createContext, useState } from 'react'

export const context = createContext(0)

export const ContextProvider = props => {
  const [total, setTotal] = useState(0)
  const [name, setName] = useState([])

  return (
    <context.Provider
      value={{
        total,
        name,
        setTotal,
        setName
      }}
    >
      {props.children}
    </context.Provider>
  )
}
