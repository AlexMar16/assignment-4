import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

class Cart extends React.Component {
    render() {
        const { cart } = this.props;
        const cartItems = cart
            .filter(cartItem => !cartItem.removed)
            .map((pizza, key) => <CartItem key={key} pizza={pizza}/>)
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

export default connect(mapStateToProps, {  })(Cart);
