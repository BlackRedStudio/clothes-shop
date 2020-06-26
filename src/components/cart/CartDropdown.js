import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton';
import '../../styles/CartDropdown.scss';
import CartItem from './CartItem';
import { selectCartItems } from '../../redux/selectors/cart-selectors';
import { toggleCartHidden } from '../../redux/actions/cart-actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const cartItemsList = cartItems.map(cartItem =>
    <CartItem key={cartItem.id} item={cartItem} /> );

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.length ?
                 cartItemsList :
                 <span className="empty-message">Your cart is empty</span>
                 }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter( connect(mapStateToProps)(CartDropdown) );
