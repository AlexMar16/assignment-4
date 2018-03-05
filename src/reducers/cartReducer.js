import { FILL_CART, ADD_TO_CART } from "../constants/cartConstants";

const initialState = {
    cart: []
};

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case FILL_CART: return action.payload === null ? initialState : state.cart = action.payload;
        case ADD_TO_CART: {
            const { name, description, price } = action.payload;
            return [
                ...state, 
                {
                    name: name,
                    description: description,
                    price: price
                }
            ]
        }
        default: return state;
    }
}

export default cartReducer;