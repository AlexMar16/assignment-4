import React from "react";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";

class GetIt extends React.Component {
    render() {
        const { handleCheck, currentMethod } = this.props;
        const styles = {
            block: {
                maxWidth: 250,
            },
            checkbox: {
                marginBottom: 16,
            },
        };
        return(
            <div>
                <h4>So how are you going to get it?</h4>
                <RadioButtonGroup name="deliveryMethod" defaultSelected={currentMethod}>
                    <RadioButton
                        value="pickup"
                        onClick={handleCheck}
                        label="I'll come running (Pick up)"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="delivery"
                        onClick={handleCheck}
                        label="You deliver it! (Delivery)"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}

export default GetIt;