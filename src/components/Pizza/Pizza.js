import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Pizza = ({ pizza }) => {
    const { id, name, description, price, image } = pizza;
    return(
        <div className="pizza-wrapper">
            <div className="pizza-image">
                <img src={image} alt="" />
            </div>
            <div className="pizza-name">{name}</div>
            <div className="pizza-price">{price}</div>
            <button><Link to={`pizzas/${id}`}>SEE WHAT'S UP</Link></button>
        </div>

    );
};


Pizza.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string

    })
};

export default Pizza;