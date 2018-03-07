import { FILL_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstants";


const cartReducer = (state = [], action) => {
    switch(action.type) {
        case FILL_CART: return action.payload === null ? [] : state = action.payload;
        case CLEAR_CART : 
            localStorage.setItem("CART", "");
            return [];
        case ADD_TO_CART: 
            const { name, description, price, removed } = action.payload;
            const newCart =  [
                ...state, 
                {
                    name: name,
                    description: description,
                    price: price,
                    removed: removed
                }
            ];
            localStorage.setItem("CART", JSON.stringify(newCart));
            return newCart;
        case REMOVE_FROM_CART:
            let spliceIt = action.payload;
            let removeCart = [
                ...state.slice(0, spliceIt),
                ...state.slice(spliceIt + 1),
            ];
            localStorage.setItem("CART", JSON.stringify(removeCart));
            return state = removeCart;
        default: return state;
    }
}

export default cartReducer;