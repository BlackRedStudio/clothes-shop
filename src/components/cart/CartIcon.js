import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/actions/cart-actions'
import { selectCartItemsCount } from '../../redux/selectors/cart-selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {ShoppingIconContainer,
ItemCountContainer,
CartIconContainer} from '../../styles/CartIconStyles.js';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconContainer as={ShoppingIcon} />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
