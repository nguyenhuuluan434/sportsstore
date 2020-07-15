import { ActionTypes } from "./Types";

// Reducer will receive a type and payload what was responded from action, change old state to new state,
// Lưu ý rằng thay vì thay đổi state trước đó thì chúng ta sẽ trả về một object state mới, state là immutable.
// State trong redux phải là immutable, Bạn sẽ không thể thay đổi state mà phải trả về một object state mới,
// việc này nhằm mục đích tránh những side effect trong application

//sử dụng data store flat to simple trong quá trình render
const initState = { cart: [], cartItems: 0, cartPrice: 0 }

// The reducer for cart actions keep track of product was selected.
export const CartReducer = (storeData, action) => {
    //sử dụng spread operator để tạo khởi tạo data, data này được tính dựa trên data cũ
    // storeData parameter as exist data what is in data store
    // action parameter là input được nhận vào từ action creator
    // initState parameter là giá trị default nếu exist data chưa tồn tại
    let newStore = { ...initState, ...storeData }

    //Tùy vào action type sẽ tính toán CRUD
    //payload trong action là property trong action creator, bao gồm product và quantity
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