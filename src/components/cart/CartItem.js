import React, {memo} from 'react';
import {
	ItemDetailsContainer,
	CartItemContainer,
} from '../../styles/CartItemStyles.js';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<img src={imageUrl} alt="item" />
			<ItemDetailsContainer>
				<span>{name}</span>
				<span>
					{quantity} x ${price}
				</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default memo(CartItem);
