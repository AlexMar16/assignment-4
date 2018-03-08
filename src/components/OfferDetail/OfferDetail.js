import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getOffer } from '../../actions/orderActions';

class OfferDetail extends React.Component {
    componentDidMount() {
        const { getOffer } = this.props;
        const { offerID } = this.props.match.params;
        getOffer(offerID);
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
    return { offer }
}

export default connect(mapStateToProps ,{getOffer})(OfferDetail);
