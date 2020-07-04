import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/selectors/directory-selectors';

import MenuItem from './MenuItem';

import { DirectoryMenuContainer } from '../styles/DirectoryStyles';

const Directory = ({ sections }) => {
	const sectionsList = sections.map(({ id, ...otherSectionProps }) => {
		return <MenuItem key={id} {...otherSectionProps} />;
	});

	return <DirectoryMenuContainer>{sectionsList}</DirectoryMenuContainer>;
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
