import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name="Emaily"
                description="Enter credentials to pay 5$ for 5 emails"
            >
                <div className="btn indigo lighten-1 waves-effect waves-light">Add Credits</div>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);

