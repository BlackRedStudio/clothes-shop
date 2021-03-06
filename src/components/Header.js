import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from './cart/CartIcon';
import CartDropdown from './cart/CartDropdown';
import { selectCartHidden } from '../redux/selectors/cart-selectors';
import { selectCurrentUser } from '../redux/selectors/user-selectors';
import { signOutStart } from '../redux/actions/user-actions';

import { ReactComponent as Logo } from '../assets/crown.svg';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from '../styles/HeaderStyles';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">Shop</OptionLink>
				<OptionLink to="/contact">Contact</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={signOutStart}>
						Sign out
					</OptionLink>
				) : (
					<OptionLink to="/signin">Sign in</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
