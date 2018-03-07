import { INCREMENT_STEP, DECREMENT_STEP, SET_DMETHOD, SET_DINFO } from "../constants/checkoutConstants";

export const addStep = () => {
    return {
        type: INCREMENT_STEP
    }
}

export const subStep = () => {
    return {
        type: DECREMENT_STEP
    }
}

export const setMethod = (method) => {
    return { 
        type: SET_DMETHOD,
        payload: method
    }
}

export const setDeliveryInfo = (information) => {
    return {
        type: SET_DINFO,
        payload: information
    }
}