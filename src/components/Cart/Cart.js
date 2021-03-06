import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import RaisedButton from "material-ui/RaisedButton";
import { clearCart, removeFromCart } from "../../actions/cartActions";

class Cart extends React.Component {
    clearCart() {
        const { clearCart } = this.props;
        clearCart();
    }

    removeFromCart(index) {
        const { removeFromCart } = this.props;
        removeFromCart(index);
    }


    render() {
        const { cart } = this.props;
        console.log(cart);
        const cartItems = cart.list
            .filter(cartItem => !cartItem.removed)
            .map((pizza, key) => <CartItem key={key} removeFromCart={this.removeFromCart.bind(this)} pizza={pizza} index={key}/>)
        const style = {
            margin: 12,
        };
        if(cart.list.length == 0 || cartItems.length == 0) {
            return (
                <div>
                    <h3 className="page-name">Wait!! I forgot to order</h3>
                    <p>It seems that your cart is empty :(</p>
                    <br/>
                    <Link to="/lastOrder">
                        <RaisedButton label="Get last order" primary={true} style={style} />
                    </Link>
                </div>
            )
        }
        return (
            <div>
                <div className="row">
                    <div className="col-4">
                        <Link to="/checkout">
                            <RaisedButton label="Checkout" primary={true} style={style} />
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link to="/lastOrder">
                            <RaisedButton label="Get last order" primary={true} style={style} />
                        </Link>
                    </div>
                    <div className="col-4">                        
                        <RaisedButton label="Clear Cart" onClick={this.clearCart.bind(this)} primary={true} style={style} />
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

const mapStateToProps = ({ cart }) => {
    return { cart }
}

Cart.propTypes = {
    cart: PropTypes.shape({
        list: PropTypes.array,
        total: PropTypes.number,
        containsOffer: PropTypes.bool
    }),
    fillCart: PropTypes.func
};

export default connect(mapStateToProps, { clearCart,removeFromCart })(Cart);
