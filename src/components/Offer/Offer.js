import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton"

const Offer = ({ offerListItem }) => {
    const { id, offer, price, validFor } = offerListItem;
    const style = {
        margin: 12,
    };
    return(
        <div className="offer-wrapper">
            <div className="offer-name">{offer}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-price">{validFor}</div>
            <Link to={`/offers/${id}`}>
                <RaisedButton label="Mmm... what's this" primary={true} style={style} />
            </Link>
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