import React from 'react'
import '../styles/CollectionPreview.scss'
import CollectionItem from './CollectionItem'

const CollectionPreview = ({ title, items }) => {

    const itemsList = items
    .filter((item, id) => id < 4)
    .map(item => 
    <CollectionItem key={item.id} item={item}></CollectionItem>)
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {itemsList}
            </div>
        </div>
    )
}

export default CollectionPreview
