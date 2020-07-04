import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/cart-actions';

import {
	ImageContainer,
	AddButtonContainer,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	CollectionItemContainer,
} from '../styles/CollectionItemStyles.js';
import CustomButton from './CustomButton';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<ImageContainer imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButtonContainer
				as={CustomButton}
				onClick={() => addItem(item)}
				inverted
			>
				ADD TO CART
			</AddButtonContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
