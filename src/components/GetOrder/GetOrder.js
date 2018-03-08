import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import validator from "validator";
import { getOrder } from "../../actions/orderActions";
import { setCart } from "../../actions/cartActions";

class GetOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            telephone: "",  
            redirect: false 
        }
    }

    validateNumber() {
        const { telephone } = this.state;
        const isTelephone = RegExp("^[6-8]{1}[0-9]{2}( |-)*[0-9]{4}$");
        if(!telephone) {
            return "No telephone provided";
        } else if (!validator.matches(telephone, isTelephone)) {
            return "Invalid phone number";
        } 
        return "";
    }

    getOrder() {
        const { getOrder } = this.props;
        const { telephone } = this.state;
        getOrder(telephone);
        this.setState({ redirect: true });
    }

    render() {
        const { telephone, redirect } = this.state;
        const { order, setCart } = this.props;
        const style = {
            margin: 12,
        };
        let error = null;
        if(order.error === "404") {
            error = <p>Sorry could not find order with this telephone number</p>
        }
        if(redirect && order.telephone) {
            setCart(setCart({
                list: order.pizzas,
                total: order.total
            }));
            return <Redirect to="/cart"/>
        }
        return (
            <div>
                {error}
                <TextField
                    name="telephone"
                    hintText="Telephone.."
                    value={telephone}
                    errorText={this.validateNumber()}
                    onChange={(e) => this.setState({ telephone: e.target.value })}
                />
                <br/>
                <RaisedButton 
                    label="Get previous order" 
                    onClick={() => this.getOrder()}
                    disabled={(this.validateNumber() !== "")}
                    primary={true} 
                    style={style} />
            </div>
        );
    }
}

const mapStateToProps = ({ order }) => {
    return { order };
}

export default connect(mapStateToProps, { getOrder, setCart })(GetOrder);