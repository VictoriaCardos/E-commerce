import React, { createContext, useState } from 'react'

export const context = createContext(0)

export const ContextProvider = props => {
  const [total, setTotal] = useState(0)

  return (
    <context.Provider
      value={{
        total,
        setTotal
      }}
    >
      {props.children}
    </context.Provider>
  )
}
