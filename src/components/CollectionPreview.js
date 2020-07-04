import React from 'react';

import CollectionItem from './CollectionItem';

import {
	TitleContainer,
	PreviewContainer,
	CollectionPreviewContainer,
} from '../styles/CollectionPreviewStyles';

const CollectionPreview = ({ title, items }) => {
	const itemsList = items
		.filter((item, id) => id < 4)
		.map(item => (
			<CollectionItem key={item.id} item={item}></CollectionItem>
		));
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title}</TitleContainer>
			<PreviewContainer>{itemsList}</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
