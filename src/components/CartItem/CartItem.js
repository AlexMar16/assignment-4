import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ pizza }) => {
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
                    {/* IMPLEMENT REMOVE */}
                    <button className="btn btn-danger"> Remove</button>
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