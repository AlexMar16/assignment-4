import { 
    GET_ORDERS_FROM_TELEPHONE,
    ORDER_POST_FAIL,
    ORDER_POST_SUCCESS,
    GET_ORDER_FAIL } from "../constants/ordersConstants";

const initialState = {
    error: "",
    order: {
        total: 0,
        pizzas: [],
        telephone: "",
        information: {},
        deliveryMethod: ""
    }
}

const orderReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_ORDERS_FROM_TELEPHONE: return state = action.payload;
        case GET_ORDER_FAIL: {
            return {
                ...state,
                error: "404"
            }   
        };
        case ORDER_POST_FAIL: return state
        case ORDER_POST_SUCCESS: return initialState
        default: return state;

    }
};

export default orderReducer;
