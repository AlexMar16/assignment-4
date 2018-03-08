import React from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import { setDeliveryInfo } from "../../actions/checkoutActions";

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
                empty: (elem) => !elem.value ? `No ${elem.name} provided` :  "",
            }
        }
    }

    onChange(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields }, ()=> {
            const { name, telephone } = fields;
            if(name && telephone) {
                const { setDeliveryInfo } = this.props;
                setDeliveryInfo(fields)
            }
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
                    errorText={validators.empty({ value: fields.name, name: "name"})}
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
            </div>
        );
    }
}

const mapStateToProps = ({ checkout }) => {
    return { checkout }
}

export default connect(mapStateToProps, { setDeliveryInfo })(PickUpForm);