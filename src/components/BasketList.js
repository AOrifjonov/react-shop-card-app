import React from 'react'
import BasketItem from './BasketItem'
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketList() {
    const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);
    const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className='basket-content'>
        <ul className='collection basket-list'>
            <li className='collection-item active'>
                Basket
                <i className='material-icons basket-close right' onClick={handleBasketShow} >close</i>
            </li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item} {...item} />
                )) : <li className='collection-item'>Basket is empty</li>
            }
            <li className='collection-item active'>
                Total Price: <b>{totalPrice}$</b>
            </li>
        </ul>
    </div>
  )
}
