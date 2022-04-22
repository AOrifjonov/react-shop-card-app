import React from 'react'

export default function BasketItem({
    name, id, price, quantity, deleteOrderItem, changeQuantity
}) {
  return (
    <li style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className='collection-item' key={id}>
        <div className='collections-group'>
          <div>
            {name} x{quantity} = {price * quantity}<b>$</b>
          </div>
          <div>
            <button onClick={()=>changeQuantity(id, false)} className='btn'>-</button>
            <button onClick={()=> changeQuantity(id, true)} className='btn'>+</button>
          </div>
        </div>
        <span className='secondary-content'>
            <i onClick={()=> deleteOrderItem(id)} className='material-icons remove-i'>delete_forever</i>
        </span>
    </li>
  )
}
