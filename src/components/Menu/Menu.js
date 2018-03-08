import React from "react";
import { connect } from "react-redux";
import Pizza from "../Pizza/Pizza";
import { getAllPizzas } from "../../actions/pizzaActions";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import {PropTypes} from "prop-types";

class Menu extends React.Component {
    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }
    render() {
        console.log(this.props);
        const { pizzas, cart } = this.props;
        let checkout = null;
        // console.log(JSON.parse(localStorage.getItem("CART")));
        if(cart.list.length > 0) {
            const style = {
                margin: 12,
            };
            checkout =( 
                <Link to="/checkout">
                    <RaisedButton label="Checkout" primary={true} style={style} />
                </Link>);
        }
        return(
            <div>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        {checkout}
                    </div>
                </div>
                <div className="container">
                    {pizzas.map(p => <Pizza key={p.id} pizza={p} />)}
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ pizzas, cart }) => {
    return { pizzas, cart }

};

Menu.propTypes = {
    getAllPizzas: PropTypes.func  
}

export default connect(mapStateToProps, { getAllPizzas })(Menu);
