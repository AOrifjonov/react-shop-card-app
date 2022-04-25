export function reducer(state, {type, payload}) {
    switch (type) {

        case 'ADD_TO_BASKET':
            const itemIndex = state.order.findIndex(i => i.id === payload.id);
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                return {
                    ...state,
                    order: [...state.order, newItem]
                }
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
                return {
                    ...state,
                    order: newOrder
                }
            }
        case 'CHANGE_QUANTITY':
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        return {
                            ...orderItem,
                            quantity: payload.isPlus ? orderItem.quantity + 1 : orderItem.quantity >= 1 ? orderItem.quantity - 1 : 1
                        }
                    } else {
                        return orderItem;
                    }
                }
            )}
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(i => i.id !== payload.id)
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }

        default:
            return state;
    }
}