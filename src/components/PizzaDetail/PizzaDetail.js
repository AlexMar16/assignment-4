import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getPizza } from "../../actions/pizzaActions";

class PizzaDetail extends React.Component {
    componentDidMount() {
        const { getPizza } = this.props;
        const { pizzaId } = this.props.match.params;
        getPizza(pizzaId);
    }

    render() {
        const { name, description, price, image } = this.props.pizza;
        return(
            <div className="pizza-wrapper">
                <div className="pizza-image"></div>
                <img src={image} alt="" />
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </div>                

        );
    }
};


const mapStateToProps = ({pizza}) => {
    return { pizza }
}

PizzaDetail.PropTypes = {
    getPizza: PropTypes.func
}
export default connect(mapStateToProps ,{getPizza})(PizzaDetail);
