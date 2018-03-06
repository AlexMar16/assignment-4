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
import { addStep, subStep, setMethod } from "../../actions/checkoutActions";

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

    
    getStepContent() {
        console.log("getting content");
        const { checkout } = this.props
        const { stepIndex, deliveryMethod } = checkout;
        switch (stepIndex) {
            case 0:
                return <GetIt handleCheck={this.handleCheck.bind(this)} currentMethod={deliveryMethod} />;
            case 1:
                return "Can we know stuff about you?";
            case 2:
                return "Mmm.. we're feeling envious that you can eat this";
            default:
                return "You\"re a long way from home sonny jim!";
        }
    }
    
    render() {
        const contentStyle = {margin: "0 16px"};
        console.log(this.props.checkout);
        const { checkout, cart } = this.props;
        const { finished, stepIndex, deliveryMethod } = checkout;
        let content = this.getStepContent();
        if(cart.length == 0) {
            return(<p>You have to have something in your cart to check it out :/ </p>);
        }
        return (
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
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                            Click here
                            </a> to reset the example.
                        </p>
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
                                    disabled={(stepIndex === 0 && !deliveryMethod)}
                                    primary={true}
                                    onClick={this.handleNext.bind(this)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ checkout, cart }) =>  {
    return { checkout, cart };
}

export default connect(mapStateToProps, { addStep, subStep, setMethod })(Checkout);