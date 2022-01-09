import React, { useState, useContext, useReducer, useEffect } from 'react'

import reducer from './reducer';

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart:[],
  user:JSON.parse(localStorage.getItem("user")) || null,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }

  const AddCart = (prod) => {
    dispatch({
        type: 'ADD',
        payload: prod,
      })
  }

  const UserSaved = (User) => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: User,
    })
  }
  
 useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(state.user));
  }, [state.user])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        AddCart,
        UserSaved,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }