import React, { Component } from 'react'
import SHOP_DATA from '../data/shop-data.js'
import CollectionPreview from '../components/CollectionPreview'

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {

        const collectionsList = this.state.collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
        return (
            <div>
                {collectionsList}
            </div>
        )
    }
}

export default Shop
