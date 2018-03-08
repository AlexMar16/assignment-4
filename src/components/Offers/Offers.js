import React from "react";
import { connect } from "react-redux";
import Offer from "../Offer/Offer";
import { getAllOffers } from "../../actions/offerActions";
import { PropTypes } from "prop-types";

class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }

    render() {
        const { allOffers } = this.props;
        return(
            <div className="container">
                {allOffers.map(p => <Offer key={p.id} offerListItem={p} />)}
            </div>
        );
    }
};

const mapStateToProps = ({ allOffers }) => {
    return { allOffers }
};

Offers.propTypes = {
    getAllOffers: PropTypes.func  
}

export default connect(mapStateToProps, { getAllOffers })(Offers);




