import { GET_ALL_PIZZAS, GET_PIZZA } from "../constants/pizzaConstants";
import fetch from "isomorphic-fetch";


export const getAllPizzas = () => {
    return dispatch => fetch("http://localhost:3600/api/pizzas").then(json => json.json()).then(data => dispatch(getAllPizzasSuccess(data)));
};

export const getPizza = (pizzaId) => {
    return dispatch => fetch(`http://localhost:3600/api/pizzas/${pizzaId}`).then(json => json.json()).then(data => dispatch(getPizzaSuccess(data)))
}

const getAllPizzasSuccess = (pizzas) => {
    return {
        type: GET_ALL_PIZZAS,
        payload: pizzas
    }

}

const getPizzaSuccess = (pizza) => {
    return {
        type: GET_PIZZA,
        payload: pizza
    }
}
