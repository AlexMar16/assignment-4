import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import RaisedButton from "material-ui/RaisedButton";
import { clearCart } from "../../actions/cartActions";

class Cart extends React.Component {
    tmp() {
        const { clearCart } = this.props;
        localStorage.setItem("CART", "");
        clearCart();
    }

    render() {
        const { cart } = this.props;
        const cartItems = cart
            .filter(cartItem => !cartItem.removed)
            .map((pizza, key) => <CartItem key={key} pizza={pizza}/>)
        const style = {
            margin: 12,
        };
        if(cart.length == 0 || cartItems.length == 0) {
            return (
                <div>
                    <h3 className="page-name">Mmmm... I like</h3>
                    <p>It seems that your cart is empty :(</p>
                </div>
            )
        }
        return (
            <div>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <RaisedButton label="Checkout" onClick={this.tmp.bind(this)} primary={true} style={style} />
                    </div>
                </div>
                <h3 className="page-name">Mmmm... I like</h3>
                <div className="container">
                    {cartItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxStoreState) => {
    console.log(reduxStoreState.cart);
    return { cart: reduxStoreState.cart }
}

Cart.propTypes = {
    cart: PropTypes.array,
    fillCart: PropTypes.func
};

export default connect(mapStateToProps, { clearCart })(Cart);
