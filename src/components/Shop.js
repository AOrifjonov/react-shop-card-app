import React from 'react'
import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import {API_KEY, API_URL} from '../config';
import BasketList from './BasketList';
import Card from './Card';
import GoodList from './GoodList';
import Loader from './Loader';
export default function Shop() {
    const {setGoods, loading, order, isBasketShow} = useContext(ShopContext);
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': `${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setGoods(data.featured);
        })
    });

  return (
    <div className='container content'>
        <Card quantity={order.length} />
        {loading ? <Loader /> : <GoodList />}
        {isBasketShow && <BasketList />}
    </div>
  )
}