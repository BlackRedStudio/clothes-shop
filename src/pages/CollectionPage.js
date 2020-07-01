import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../redux/selectors/shop-selectors';

import CollectionItem from '../components/CollectionItem';
import '../styles/CollectionPage.scss';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	const { title, items } = collection;

	const itemList = items.map(item => <CollectionItem key={item.id} item={item} />);

	return (
		<div className="collection-page">
			<h2 className="title">{ title }</h2>
			<div className="items">{ itemList }</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
