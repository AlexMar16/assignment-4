import { GET_ALL_OFFERS, GET_OFFER } from "../constants/offersConstants";
import fetch from "isomorphic-fetch";

export const getAllOffers = () => {
    return dispatch => fetch("http://localhost:3600/api/offers").then(json => json.json()).then(data => dispatch(getAllOffersSuccess(data)));
};

export const getOffer = (offerID) => {
    console.log(offerID);
    return dispatch => fetch(`http://localhost:3600/api/offers/${offerID}`).then(json => json.json()).then(data => dispatch(getOfferSuccess(data)));
};

const getAllOffersSuccess = (allOffers) => {
    return {
        type: GET_ALL_OFFERS,
        payload: allOffers
    }
}

const getOfferSuccess = (offer) => {
    console.log("GOT THE OFFER");
    return {
        type: GET_OFFER,
        payload: offer
    }
}
