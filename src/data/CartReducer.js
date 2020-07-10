import { ActionTypes } from "./Types";

export const CartReducer = (storeData, action) => {
    let newStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData }
    switch (action.type) {
        case ActionTypes.CART_ADD:
            const p = action.payload.product;
            const q = action.payload.quantity;
            let existing = newStore.cart.find(item => item.product.id === p.id)
            if (existing) {
                existing.quantity += q;

            } else {
                newStore.cart = [...newStore.cart, action.payload]
            }
            newStore.cartItems += q
            newStore.cartPrice += p.price * q;
            return newStore;
        case ActionTypes.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id !== action.payload.product.id) {
                    return item
                }
                let diff = action.payload.quantity - item.quantity
                if (diff <= 0) {
                    newStore.cartItems -= item.quantity
                    newStore.cartPrice -= (item.product.price * item.quantity)
                } else {
                    newStore.cartItems += diff
                    newStore.cartPrice += (item.product.price * diff)
                }
                return action.payload
            })
            return newStore;
        case ActionTypes.CART_REMOVE:
            let selection = newStore.cart.find(item => item.product.id === action.payload.id)
            if (!selection) {
                return newStore;
            }
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.quantity * selection.product.price;
            newStore.cart = newStore.cart.filder(item => item !== selection)
            return newStore;
        case ActionTypes.CART_CLEAR:
            return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 }
        default:
            return storeData || {};
    }
}