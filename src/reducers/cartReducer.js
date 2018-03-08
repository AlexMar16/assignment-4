import { FILL_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const initialState = {
    list: [],
    total: 0,
    containsOffer: false
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case FILL_CART: return action.payload === null ? initialState : state = action.payload;
        case CLEAR_CART : 
            localStorage.setItem("CART", "");
            return state = initialState
        case ADD_TO_CART: 
            const { name, description, price, removed } = action.payload;
            const newCart =  {
                ...state,
                list: [
                    ...state.list,
                    {
                        name: name,
                        description: description,
                        price: price,
                        removed: removed
                    }
                ]
            };
            localStorage.setItem("CART", JSON.stringify(newCart));
            return newCart;
        case REMOVE_FROM_CART:
            let spliceIt = action.payload;
            let removeCart =  {
                ...state,
                list: [
                    ...state.list.slice(0, spliceIt),
                    ...state.list.slice(spliceIt + 1),
                ]
            };
            localStorage.setItem("CART", JSON.stringify(removeCart));
            return state = removeCart;
        default: return state;
    }
}

export default cartReducer;