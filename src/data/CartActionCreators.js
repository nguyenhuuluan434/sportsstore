import { ActionTypes } from "./Types";

//this class was created with purpose that used to define action creators for cart
//note payload property that carries the data required to execute the action

//this action creator for add products to cart
//type là parameter bắt buộc khi tạo action creator, trong toàn bộ ứng dụng type này là duy nhất
export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});

//this action creator for update products in cart
export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity }
})

//this action creator for remove product form cart
export const removeFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
})

//this action creator for clean cart, remove all product in cart
export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
})