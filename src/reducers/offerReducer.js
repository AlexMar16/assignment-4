import { GET_ALL_OFFERS } from "../constants/offersConstants";

const offersReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_OFFERS: return action.payload;
        default: return state;
    }
};

export default offersReducer;
