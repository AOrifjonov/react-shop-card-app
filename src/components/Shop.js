import React from 'react'
import { useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';
import BasketList from './BasketList';
import Card from './Card';
import GoodList from './GoodList';
import Loader from './Loader';
import { toast } from 'react-toastify';

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(i => i.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return item;
                }
            })
            setOrder(newOrder);
        }
        toast.success(`${item.name} added to basket`);
    }
    const changeQuantity = (item, isPlus) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === item) {
                return {
                    ...orderItem,
                    quantity: isPlus ? orderItem.quantity + 1 : orderItem.quantity >= 1 ? orderItem.quantity - 1 : 1
                }
            } else {
                return item;
            }
        })
        setOrder(newOrder);
    }

    const deleteOrderItem = (id) => {
        setOrder(order.filter(i => i.id !== id));
        toast.error(`${id} removed from basket`);
    }

    const handleBasketShow = () => setIsBasketShow(!isBasketShow);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL, {
            headers: {
                'Authorization': `${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })
    }, []);

  return (
    <div className='container content'>
        <Card quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? <Loader /> : <GoodList goods={goods} addToBasket={addToBasket} />}
        {isBasketShow && <BasketList changeQuantity={changeQuantity} deleteOrderItem={deleteOrderItem} order={order} handleBasketShow={handleBasketShow}  />}
    </div>
  )
}
