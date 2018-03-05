import React from "react";
import { connect } from "react-redux";
import Pizza from "../Pizza/Pizza";
import { getAllPizzas } from "../../actions/pizzaActions";

class Menu extends React.Component {
    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }
    render() {
        const { pizzas } = this.props;
        return(
            <div className="container">
                {pizzas.map(p => <Pizza key={p.id} pizza={p} />)}
            </div>
        );
    }


};

const mapStateToProps = ({ pizzas }) => {
    return { pizzas }

};

export default connect(mapStateToProps, { getAllPizzas })(Menu);
