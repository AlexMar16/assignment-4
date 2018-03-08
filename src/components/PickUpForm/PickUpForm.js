import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import { setDeliveryInfo } from "../../actions/checkoutActions";
import validator from "validator";

class PickUpForm extends React.Component {
    constructor(props) {
        super(props);
        const { name, telephone } = this.props.checkout.information;
        this.state = {
            fields: {
                name: name,
                telephone: telephone
            },
            validators: {
                name: () => !this.state.fields.name ? "No name provided" :  "",
                telephone: () =>  {
                    const { telephone } = this.state.fields
                    const isTelephone = RegExp("^[6-8]{1}[0-9]{2}( |-)*[0-9]{4}$");
                    if(!telephone) {
                        return "No telephone provided";
                    } else if (!validator.matches(telephone, isTelephone)) {
                        return "Invalid phone number";
                    } else {
                        return ""
                    }
                },
            }
        }
    }

    onChange(e) {
        const { validators } = this.state;
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields }, ()=> {
            const { setDeliveryInfo } = this.props;
            if(validators.name()) {
                setDeliveryInfo({...fields, name: ""})
                return;
            } else if(validators.telephone()) {
                setDeliveryInfo({...fields, telephone: ""})
                return;
            }
            console.log("changin");
            setDeliveryInfo(fields)
        });
    }

    render() {
        const { fields, validators } = this.state;
        return(
            <div>
                <TextField
                    hintText="Name.."
                    name="name"
                    value={fields.name}
                    errorText={validators.name()}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="telephone"
                    hintText="Telephone.."
                    value={fields.telephone}
                    errorText={validators.telephone()}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ checkout }) => {
    return { checkout }
}

export default connect(mapStateToProps, { setDeliveryInfo })(PickUpForm);