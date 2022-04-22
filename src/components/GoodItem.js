import React from 'react'

export default function GoodItem(props) {
    const {id, name, description, price, full_background, addToBasket } = props;

  return (
    <div className='card' key={id}>
        <div className='card-image'>
            <img src={full_background} alt={description} />
            <span className='card-title'>{name}</span>
        </div>
        <div className='card-content'>
            <span className='card-title'>{name}</span>
            <p>{description}</p>
        </div>
        <div className='card-action'>
            <button onClick={()=> addToBasket({id, name, price})} className='btn'>Buy</button>
            <span className='right'>{price} $</span>
        </div>
    </div>
  )
}
