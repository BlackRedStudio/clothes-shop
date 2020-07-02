import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H0TkMADTCS4vYoMtwhpt1ziy66xB7J2r8O2rJkbZG1DkNAkd3FBXOurhGkWUTD5PkPGuf0xqBTVwhqPIlijHunS002k2OCLRc';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
        return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
         />
    )
};

export default StripCheckoutButton;
