import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Offer = ({ offerListItem }) => {
    const { id, offer, price, validFor } = offerListItem;
    return(
        <div className="offer-wrapper">
            <div className="offer-name">{offer}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-price">{validFor}</div>
            <button><Link to={`offers/${id}`}>SEE WHAT'S UP</Link></button>
        </div>

    );
};

Offer.propTypes = {
    offerListItem: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.int,
        validFor: PropTypes.string
    })
};

export default Offer;