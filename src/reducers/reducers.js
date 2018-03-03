import { combineReducers } from 'redux';
import pizza from './pizzaReducers';
import order from './orderReducers';

export default combineReducers({
    pizza, order

})
