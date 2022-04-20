import React from 'react'
import { connect } from 'react-redux'

export const CartProductListItem = ({ product, productCount }) => {
    return (
        <div>
            {product.name} : {productCount}
        </div>
    )
}
