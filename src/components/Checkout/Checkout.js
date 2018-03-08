import React from "react";
import { connect } from "react-redux";
import {
    Step,
    Stepper,
    StepLabel,
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import GetIt from "../GetIt/GetIt";
import { Redirect } from "react-router-dom";
import PickUpForm from "../PickUpForm/PickUpForm";
import DeliveryMethod from "../DeliveryMethod/DeliveryMethod";
import CartItem from "../CartItem/CartItem";
import { addStep, subStep, setMethod, restartCheckout } from "../../actions/checkoutActions";
import { removeFromCart, clearCart } from "../../actions/cartActions";
import { submitOrder } from "../../actions/orderActions";
import { PropTypes } from "prop-types";


class Checkout extends React.Component {
    handleNext() {
        const { addStep } = this.props;
        addStep();
    };
    
    handlePrev() {
        const { subStep } = this.props;
        subStep();
    };

    handleCheck(e) {
        const { setMethod } = this.props;
        setMethod(e.target.value)
    }

    removeFromCart(index) {
        const { removeFromCart } = this.props;
        removeFromCart(index);
    }

    
    getStepContent() {
        const { checkout, cart } = this.props
        const { stepIndex, deliveryMethod } = checkout;
        const cartItems = cart.list
            .filter(cartItem => !cartItem.removed)
            .map((pizza, key) => <CartItem key={key} pizza={pizza} removeFromCart={this.removeFromCart.bind(this)} index={key}/>)
        switch (stepIndex) {
            case 0:
                return <GetIt handleCheck={this.handleCheck.bind(this)} currentMethod={deliveryMethod} />;
            case 1 : {
                if(deliveryMethod === "pickup") {
                    return <PickUpForm />;
                }
                return <DeliveryMethod />
            }
            case 2:
                return cartItems;
            default:
                return "You\"re a long way from home sonny jim!";
        }
    }

    checkInformation() {
        const { information, deliveryMethod } = this.props.checkout;
        const { name, address, telephone, zip, city} = information;
        if(deliveryMethod === "pickup") {
            return (!name || !telephone); 
        }
        return (!name || !address || !telephone || !zip || !city);
    }

    checkDisabled() {
        const { stepIndex, deliveryMethod } = this.props.checkout;
        if (stepIndex === 0 && !deliveryMethod) {
            return true;
        } else if(stepIndex === 1 && this.checkInformation()) {
            return true
        }
        return false;
    }

    inTheOven() {
        const { submitOrder, clearCart, cart, checkout, restartCheckout } = this.props;
        submitOrder({
            total: cart.total,
            pizzas: cart.list,
            telephone: checkout.information.telephone,
            information: checkout.information,
            deliveryMethod: checkout.deliveryMethod
        });
        clearCart();
        restartCheckout();
    }
    
    render() {
        const contentStyle = {margin: "0 16px"};
        const { checkout, cart } = this.props;
        const { finished, stepIndex } = checkout;
        let content = this.getStepContent();
        let inOven = "Are you sure you want this heavenly food?";
        if(cart.list.length == 0) {
            return(<Redirect to="/pizzas"></Redirect> );
        }
        return (
            <form>
                <div style={{width: "100%", maxWidth: 700, margin: "auto"}}>
                    <Stepper activeStep={stepIndex}>
                        <Step>
                            <StepLabel>How are you going to get it?</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Can we know stuff about you?</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Mmm.. we're feeling envious that you can eat this</StepLabel>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        {finished ? (
                            <div>
                                <p> {inOven} </p>
                                <RaisedButton 
                                    label="Confirm"
                                    primary={true}
                                    onClick={() => {
                                        inOven = "The pizza is in the oven!"
                                        this.inTheOven();
                                    }}
                                />
                            </div>
                        ) : (
                            <div>
                                {content}
                                <div style={{marginTop: 12}}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onClick={this.handlePrev.bind(this)}
                                        style={{marginRight: 12}}
                                    /> 
                                    <RaisedButton
                                        label={stepIndex === 2 ? "Finish" : "Next"}
                                        disabled={this.checkDisabled()}
                                        primary={true}
                                        onClick={this.handleNext.bind(this)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = ({ checkout, cart }) =>  {
    return { checkout, cart };
}

Checkout.propTypes = {
    checkout: PropTypes.shape({
        deliveryMethod: PropTypes.string,
        finished: PropTypes.bool,
        information: PropTypes.object,
        next: PropTypes.bool,
        stepIndex: PropTypes.int

    }),
    cart: PropTypes.shape({
        containsOffer: PropTypes.bool,
        list: PropTypes.array,
        total: PropTypes.int
    })
};


export default connect(mapStateToProps, { addStep, subStep, setMethod, removeFromCart, submitOrder, clearCart, restartCheckout })(Checkout);
