import React from 'react'
import '../styles/PreviewCollection.scss'
import CollectionItem from './CollectionItem'

const PreviewCollection = ({ title, items }) => {

    const itemsList = items.filter((item, id) => id < 4).map(({id, ...otherItemProps}) => <CollectionItem key={id} {...otherItemProps}></CollectionItem>)
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {itemsList}
            </div>
        </div>
    )
}

export default PreviewCollection
