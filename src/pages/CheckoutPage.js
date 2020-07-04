import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../redux/selectors/cart-selectors';

import {
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	TestWarningContainer,
	CheckoutPageContainer,
} from '../styles/CheckoutPageStyles';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/stripe/StripCheckoutButton';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<TotalContainer>
				<span>Total: ${total}</span>
			</TotalContainer>
			<TestWarningContainer>
				*Please use the following credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</TestWarningContainer>
			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
