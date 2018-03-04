import { GET_ALL_PIZZAS } from '../constants/pizzaConstants';

const pizzasReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PIZZAS: return action.payload;
        default: return state;

    }
};

export default pizzasReducer;
