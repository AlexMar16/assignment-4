import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import validator from "validator";
import { setDeliveryInfo } from "../../actions/checkoutActions";

class DeliveryMethod extends React.Component {

    constructor(props) {
        super(props);
        const { name, address, city, telephone, zip } = this.props.checkout.information;
        this.state = {
            fields: {
                name: name,
                address: address,
                city: city,
                telephone: telephone,
                zip: zip
            },
            

            validators: {
                name: () => !this.state.fields.name ? "No name provided" :  "",
                address: () => !this.state.fields.address ? "No address provided" :  "",
                city: () => !this.state.fields.city ? "No city provided" :  "",
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
                zip: () => !this.state.fields.zip ? "No postal code provided" :  "",
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
            } else if(validators.address()) {
                setDeliveryInfo({...fields, address: ""})
                return;
            } else if(validators.telephone()) {
                setDeliveryInfo({...fields, telephone: ""})
                return;
            } else if (validators.city()) {
                setDeliveryInfo({...fields, city: ""})
                return;
            } else if(validators.zip()) {
                setDeliveryInfo({...fields, zip: ""})
                return;
            }
            setDeliveryInfo(fields)
        });
    }

    render() {
        console.log(checkout);
        
        const { fields, validators } = this.state;
        return(
            <div>                
                <h4>DRIVE IT TO ME NOW</h4>
                <TextField
                    hintText="Name.."
                    name="name"
                    value={fields.name}
                    errorText={validators.name()}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="address"
                    hintText="Address.."
                    value={fields.address}
                    errorText={validators.address()}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="city"
                    hintText="City.."
                    value={fields.city}
                    errorText={validators.city()}
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
                <br/>
                <TextField
                    name="zip"
                    hintText="Postal code.."
                    value={fields.zip}
                    errorText={validators.zip()}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ checkout }) => {
    return { checkout }
}

export default connect(mapStateToProps, { setDeliveryInfo })(DeliveryMethod);