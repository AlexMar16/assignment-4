import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getOffer } from "../../actions/offerActions";

class OfferDetail extends React.Component {
    componentDidMount() {
        const { getOffer } = this.props;
        const { offerId } = this.props.match.params;
        console.log("compodaælsdkf");
        getOffer(offerId);
    }

    render() {
        console.log(offer);
        const { offer, price, validFor } = this.props.offer;
        console.log("Hello!");
        return(
            <div className="pizza-wrapper">
                <div className="pizza-name">{offer}</div>
                <div className="pizza-description">{validFor}</div>
                <div className="pizza-price">{price}</div>
            </div>
        );
    }
};

const mapStateToProps = ({offer}) => {
    return { offer }
}

OfferDetail.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number,
        offer: PropTypes.string,
        validFor: PropTypes.string
    })
};


export default connect(mapStateToProps ,{ getOffer })(OfferDetail);
