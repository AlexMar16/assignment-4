import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

const CartItem = ({ pizza, removeFromCart, index }) => {
    const style = {
        margin: 12,
    };
    const {name, description, price } = pizza;
    return(
        <div>
            <div className="row">
                <h4>{name}</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="col-6">{description}</div>
                    <div className="col-6">{price} kr.</div>
                </div>
                <div className="col-6">
                    <RaisedButton label="Remove" secondary={true} onClick={() => removeFromCart(index)} style={style} />
                </div>
            </div>
        </div>
    );
}



CartItem.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
}

export default CartItem;