import { 
    GET_ORDERS_FROM_TELEPHONE,
    ORDER_POST_FAIL,
    ORDER_POST_SUCCESS,
    GET_ORDER_FAIL } from "../constants/ordersConstants";
import fetch from "isomorphic-fetch";


export const getOrder= (telephone) => {
    return dispatch => fetch(`http://localhost:3600/api/orders/${telephone}`).then(resp =>  {
        if(resp.status === 404) {
            dispatch(() => {
                console.log(resp);
                return {
                    type: GET_ORDER_FAIL
                }
            })
        } else { 
            resp.json().then( data =>  {
                dispatch(getOrderSuccess(data));
            });
        }
    });
};

export const submitOrder = (order) => {
    localStorage.setItem("USER", order.information);
    return dispatch => fetch(`http://localhost:3600/api/orders/${order.telephone}`, { method: "POST", headers: new Headers({ "Content-Type": "application/json" }), body: JSON.stringify(order) }).then(resp => {
        if (resp.ok) { 
            dispatch(orderSuccessful()); 
        } else { dispatch(orderFailed()); }
    });
};

const getOrderSuccess = (order) => {
    return {
        type: GET_ORDERS_FROM_TELEPHONE,
        payload: order[0]
    }
}

const orderSuccessful = () => {
    return {
        type: ORDER_POST_SUCCESS,
    }
}

const orderFailed = () => {
    return {
        type: ORDER_POST_FAIL
    }
}