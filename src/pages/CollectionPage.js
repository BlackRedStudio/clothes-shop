import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../redux/selectors/shop-selectors';

import CollectionItem from '../components/CollectionItem';
import {
	TitleContainer,
	ItemsContainer,
	CollectionPageContainer,
} from '../styles/CollectionPageStyles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;

	const itemList = items.map(item => (
		<CollectionItem key={item.id} item={item} />
	));

	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>{itemList}</ItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
