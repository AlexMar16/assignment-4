import { GET_ORDERS_FROM_TELEPHONE } from "../constants/ordersConstants";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ORDERS_FROM_TELEPHONE: return state;
        default: return state;

    }
};

export default orderReducer;
