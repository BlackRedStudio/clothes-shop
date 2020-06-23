import React from 'react'
import { connect } from 'react-redux';

import CustomButton from '../CustomButton';
import '../../styles/CartDropdown.scss';
import CartItem from './CartItem';

const CartDropdown = ({ cartItems }) => {
    const cartItemsList = cartItems.map(cartItem => 
    <CartItem key={cartItem.id} item={cartItem} /> );

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItemsList }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton> 
        </div>
    )
}

const mapStateToProps = ({cart: { cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)