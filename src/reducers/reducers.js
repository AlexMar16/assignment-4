import { combineReducers } from 'redux';
import pizza from './pizzaReducer';
import order from './orderReducer';
import pizzas from './pizzasReducer';
import allOffers from './offerReducer';
import offerItemReducer from './offerItemReducer';

export default combineReducers({
    pizzas, pizza, order, allOffers, offerItemReducer
})
