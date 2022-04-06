import React from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/products/productsArray'

const productsObject = productsArray.reduce(
    (obj, product) => ({
        ...obj,
        [product.id]: product,
    }),
    {}
)

export const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[productId].name} :
                        {productsInCart[productId]} :{' '}
                        {productsObject[productId].price}
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
            </div>
        </>
    )
}
