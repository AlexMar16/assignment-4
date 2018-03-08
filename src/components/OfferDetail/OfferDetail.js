import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getOffer } from "../../actions/offerActions";

class OfferDetail extends React.Component {
    componentDidMount() {
        const { getOffer } = this.props;
        const { offerId } = this.props.match.params;
        getOffer(offerId);
    }

    render() {
        const { offer, price, validFor } = this.props.offer;
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
