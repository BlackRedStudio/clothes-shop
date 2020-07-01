import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../redux/selectors/directory-selectors'

import MenuItem from './MenuItem';

import '../styles/Directory.scss';

const Directory = ({ sections }) => {
		const sectionsList = sections.map(
			({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			}
    );

		return (
      <div className="directory-menu">{sectionsList}</div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
