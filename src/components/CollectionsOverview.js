import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../redux/selectors/shop-selectors';

import CollectionPreview from './CollectionPreview';
import { CollectionOverviewContainer } from '../styles/CollectionsOverviewStyles';

const CollectionsOverview = ({ collections }) => {
	const collectionsList = collections.map(
		({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		)
	);
	return (
		<CollectionOverviewContainer>
			{collectionsList}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
