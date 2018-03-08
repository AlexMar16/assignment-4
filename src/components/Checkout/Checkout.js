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
import PickUpForm from "../PickUpForm/PickUpForm";
import DeliveryMethod from "../DeliveryMethod/DeliveryMethod";
import CartItem from "../CartItem/CartItem";
import { addStep, subStep, setMethod } from "../../actions/checkoutActions";
import { removeFromCart } from "../../actions/cartActions";

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
    
    render() {
        const contentStyle = {margin: "0 16px"};
        const { checkout, cart } = this.props;
        const { finished, stepIndex, deliveryMethod, information } = checkout;
        let content = this.getStepContent();
        if(cart.list.length == 0) {
            return(<p>You have to have something in your cart to check it out :/ </p>);
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
                            <p><a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >Click here
                            </a> to reset the example.</p>
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

export default connect(mapStateToProps, { addStep, subStep, setMethod, removeFromCart })(Checkout);