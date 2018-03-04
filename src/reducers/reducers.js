import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import pizzas from './pizzasReducer';

export default combineReducers({
    pizzas, pizza, order

})
