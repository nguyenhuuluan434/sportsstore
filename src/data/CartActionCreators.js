import { ActionTypes } from "./Types"

export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
})

export const updateCartQuantiTy = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: {
        product,
        quantity: quantity
    }
})

export const removeFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: {
        product
    }
})

export const cleanCar = () => ({
    type: ActionTypes.CART_CLEAR,
})