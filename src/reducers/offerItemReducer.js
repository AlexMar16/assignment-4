import { GET_OFFER } from "../constants/offersConstants";

const offerItemReducer = (state = [], action) => {
    switch (action.type) {
        case GET_OFFER: return action.payload;
        default: return state;
    }
};

export default offerItemReducer;
