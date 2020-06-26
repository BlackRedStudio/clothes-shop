import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../firebase/firebase-utils';
import CartIcon from './cart/CartIcon'
import CartDropdown from './cart/CartDropdown';
import { selectCartHidden } from '../redux/selectors/cart-selectors'
import { selectCurrentUser } from '../redux/selectors/user-selectors'

import { ReactComponent as Logo } from '../assets/crown.svg'

import '../styles/Header.scss'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign out</div> :
                    <Link className="option" to="/signin">Sign in</Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
