import React from 'react'
import {createContext, useReducer} from 'react'
import { reducer } from './reducer'

export const ShopContext = createContext()

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false
}


export default function ContextProvider({children}) {

  const [value, dispatch] = useReducer(reducer, initialState)

  value.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  }

  value.changeQuantity = (itemId, isPlus) => {
    dispatch({type: 'CHANGE_QUANTITY', payload: {id: itemId, isPlus}})
  }

  value.handleBasketShow = () => {
    dispatch({type: 'TOGGLE_BASKET'})
  }

  value.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  value.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  return (
    <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
  )
}
