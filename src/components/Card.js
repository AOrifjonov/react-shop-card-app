import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function Card(props) {
    const {quantity = 0} = props;
    const { handleBasketShow } = useContext(ShopContext);

  return (
    <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
        <i className='material-icons'>add_shopping_cart</i>
        {
            quantity ? <span className='cart-quantity' >{quantity}</span> : null
        }
    </div>
  )
}
