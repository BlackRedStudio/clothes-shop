import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/selectors/cart-selectors';
import { toggleCartHidden } from '../../redux/actions/cart-actions';

import CustomButton from '../CustomButton';
import CartItem from './CartItem';

import {EmptyMessageContainer,
CartItemsContainer,
CartDropdownContainer} from '../../styles/CartDropdownStyles.js';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const cartItemsList = cartItems.map(cartItem =>
    <CartItem key={cartItem.id} item={cartItem} /> );

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                { cartItems.length ?
                 cartItemsList :
                 <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                 }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter( connect(mapStateToProps)(CartDropdown) );
