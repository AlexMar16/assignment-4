import { FILL_CART, ADD_TO_CART, CLEAR_CART } from "../constants/cartConstants";


const cartReducer = (state = [], action) => {
    switch(action.type) {
        case FILL_CART: return action.payload === null ? [] : state = action.payload;
        case CLEAR_CART : 
            localStorage.setItem("CART", "");
            return [];
        case ADD_TO_CART: 
            const { name, description, price } = action.payload;
            const newCart =  [
                ...state, 
                {
                    name: name,
                    description: description,
                    price: price
                }
            ];
            localStorage.setItem("CART", JSON.stringify(newCart));
            return newCart;
        default: return state;
    }
}

export default cartReducer;