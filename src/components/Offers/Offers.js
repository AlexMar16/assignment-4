import React from 'react';
import { connect } from 'react-redux';
import Offer from '../Offer/Offer';
import { getAllOffers } from '../../actions/offerActions';

class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }

    render() {
        const { allOffers } = this.props;
        console.log(allOffers);
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

export default connect(mapStateToProps, { getAllOffers })(Offers);




