import React, { useState } from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/products/productsArray'
import { Link } from 'react-router-dom'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

console.log(productsObject)

export const CartHeader = ({ productsInCart }) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[productId].name} :
                    {productsInCart[productId]}
                </div>
            ))}
            <div>
                {keys(productsInCart).reduce((total, productId) => {
                    return (
                        total +
                        productsObject[productId].price *
                            productsInCart[productId]
                    )
                }, 0)}{' '}
                0$
            </div>
            <Link to="/cart">Show cart</Link>
        </div>
    )
}
