import React from 'react'
import { keys } from 'lodash'
import { productsArray } from 'components/Products/productsArray'

export const CartHeader = ({ productInCart }) => {
    return (
        <>
            <div>
                {keys(productInCart).map((productId) => (
                    <div key={productId}>
                        {productsArray[productId - 1].name} :{' '}
                        {productInCart[productId]}
                    </div>
                ))}
            </div>
        </>
    )
}
