import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context';
import GoodItem from './GoodItem'

export default function GoodList() {
  const { goods = [] } = useContext(ShopContext);
    if (!goods) {
        return <h3>Nothing here</h3>
    } else {
      return (
        <div className='goods'>
            {
              goods.map(good => <GoodItem key={good.id} {...good} />)
            }
        </div>
      )
   }
}
