import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../redux/selectors/shop-selectors';
import WithSpinner from '../components/WithSpinner';
import CollectionOverview from '../components/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
