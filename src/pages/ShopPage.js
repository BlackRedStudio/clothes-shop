import React, { Component } from 'react'
import SHOP_DATA from '../data/shop-data.js'
import PreviewCollection from '../components/PreviewCollection'

class Shop extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {

        const collectionsList = this.state.collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))
        return (
            <div>
                {collectionsList}
            </div>
        )
    }
}

export default Shop
