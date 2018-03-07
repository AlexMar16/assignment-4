import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import { setDeliveryInfo } from "../../actions/checkoutActions";

class DeliveryMethod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: "",
                address: "",
                city: "",
                telephone: "",
                zip: ""
            },
            validators: {
                empty: (elem) => !elem.value ? `No ${elem.name} provided` :  "",
            }
        }
    }

    onChange(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields }, ()=> {
            const { name, address, city, telephone, zip } = fields;
            if(name && address && city && telephone && zip) {
                const { setDeliveryInfo } = this.props;
                setDeliveryInfo(fields)
            }
        });
    }

    render() {
        const { fields, validators } = this.state;
        console.log(fields);
        return(
            <div>                
                <h4>DRIVE IT TO ME NOW</h4>
                <TextField
                    hintText="Name.."
                    name="name"
                    value={fields.name}
                    errorText={validators.empty({ value: fields.name, name: "name"})}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="address"
                    hintText="Address.."
                    value={fields.address}
                    errorText={validators.empty({ value: fields.address, name: "address"})}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="city"
                    hintText="City.."
                    value={fields.city}
                    errorText={validators.empty({ value: fields.city, name: "city"})}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="telephone"
                    hintText="Telephone.."
                    value={fields.telephone}
                    errorText={validators.empty({ value: fields.telephone, name: "telephone"})}
                    onChange={this.onChange.bind(this)}
                />
                <br/>
                <TextField
                    name="zip"
                    hintText="Postal code.."
                    value={fields.zip}
                    errorText={validators.empty({ value: fields.zip, name: "postal code"})}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

export default connect(null, { setDeliveryInfo })(DeliveryMethod);