import { 
    INCREMENT_STEP, 
    DECREMENT_STEP, 
    SET_DMETHOD, 
    SET_DINFO,
    RESTART_CHECKOUT } from "../constants/checkoutConstants";

const initalState = {
    finished: false,
    stepIndex: 0,
    deliveryMethod: "",
    information: {},
    next: false,
}

const checkoutReducer = (state = initalState, action) => {
    switch(action.type) {
        case INCREMENT_STEP: {
            return { 
                ...state,
                stepIndex: state.stepIndex + 1,
                finished: 3 === state.stepIndex + 1
            };
        }
        case DECREMENT_STEP: {
            let sub = 0;
            if(state.stepIndex > 0) {
                sub = 1;
            } 
            return { 
                ...state,
                stepIndex: state.stepIndex - sub,
            };
        }
        case SET_DMETHOD: return {
            ...state,
            deliveryMethod: action.payload
        };
        case SET_DINFO : {
            const object =  {
                ...state,
                information: action.payload
            };
            return state = object;
        }
        case RESTART_CHECKOUT: return state = initalState;
        default: return state;
    }
}

export default checkoutReducer;