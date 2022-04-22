import React from 'react'
import GoodItem from './GoodItem'

export default function GoodList(props) {
    const {goods = [], addToBasket} = props;
    if (!goods) {
        return <h3>Nothing here</h3>
    }
  return (
    <div className='goods'>
        {
            goods.map(good => <GoodItem key={good.id} addToBasket={addToBasket} {...good} />)
        }
    </div>
  )
}
