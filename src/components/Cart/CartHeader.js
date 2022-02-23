import React from 'react'
import { keys } from 'lodash'

export const CartHeader = ({ productInCart }) => {
    return (
        <>
            <div>
                {keys(productInCart).map((productId) => (
                    <div key={productId}>
                        {productId} : {productInCart[productId]}
                    </div>
                ))}
            </div>
        </>
    )
}
