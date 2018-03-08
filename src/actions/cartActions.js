import { FILL_CART,
    CART, 
    ADD_TO_CART, 
    CLEAR_CART, 
    REMOVE_FROM_CART,
    SET_CART } from "../constants/cartConstants";

export const fillCart = () => {
    return {
        type: FILL_CART,
        payload: JSON.parse(localStorage.getItem(CART))
    }
}

export const addToCart = (item) => {
    const cool = cartFormat(item);
    return {
        type: ADD_TO_CART,
        payload: cool
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
        payload: ""
    }
}

export const removeFromCart = (index) => {
    return {
        type: REMOVE_FROM_CART,
        payload: index
    }
}

export const setCart = (newCart) => {
    return {
        type: SET_CART,
        payload: newCart
    }
}

const cartFormat = (pizza) => {
    const { name, description, price} = pizza;
    return {
        name: name,
        description: description,
        price: price,
        removed: false
    };
}