import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context'
import { toast } from 'react-toastify'

export default function BasketItem({
    name, id, price, quantity, deleteOrderItem, 
}) {

  const {removeFromBasket, changeQuantity} = useContext(ShopContext);

  return (
    <li style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className='collection-item' key={id}>
        <div className='collections-group'>
          <div>
            {name} x{quantity} = {price * quantity}<b>$</b>
          </div>
          <div>
            <button onClick={()=> {changeQuantity(id, false)}} className='btn'>-</button>
            <button onClick={()=> changeQuantity(id, true)} className='btn'>+</button>
          </div>
        </div>
        <span className='secondary-content'>
            <i onClick={()=> {
              removeFromBasket(id)
              toast.error(`${name} removed from basket`)
            }} className='material-icons remove-i'>delete_forever</i>
        </span>
    </li>
  )
}