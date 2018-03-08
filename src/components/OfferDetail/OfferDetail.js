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
        const { offer, price, validFor } = this.props.offer;
        console.log("Hello!");
        return(
            <div className="pizza-wrapper">
                <div className="pizza-name">{offer}</div>
                <div className="pizza-description">{validFor}</div>
                <div className="pizza-price">{price}</div>
                <div className="pizza-price">My name is Beggi</div>
            </div>
        );
    }
};

const mapStateToProps = ({offer}) => {
    console.log(offer);
    return { offer }
}

export default connect(mapStateToProps ,{ getOffer })(OfferDetail);
