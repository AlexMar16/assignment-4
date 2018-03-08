import { combineReducers } from "redux";
import pizza from "./pizzaReducer";
import order from "./orderReducer";
import pizzas from "./pizzasReducer";
import cart from "./cartReducer";
import checkout from "./checkoutReducer";
import allOffers from "./offerReducer";
import offer from "./offerItemReducer";

export default combineReducers({
    pizzas, pizza, order, allOffers, offer, cart, checkout
})
