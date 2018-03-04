import { GET_PIZZA } from '../constants/pizzaConstants';

const pizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PIZZA: return action.payload;
        default: return state;

    }
};

export default pizzaReducer;
