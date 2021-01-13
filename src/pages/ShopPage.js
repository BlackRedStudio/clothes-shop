import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../redux/actions/shop-actions';
import Spinner from '../components/Spinner';
import ErrorBoundary from '../components/ErrorBoundary';

const CollectionsOverviewContainer = lazy(() => import('../containers/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('../containers/CollectionPageContainer'));

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
					<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
