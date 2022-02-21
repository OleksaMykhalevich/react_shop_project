import React from 'react'

export const CartHeader = ({ productInCart }) => {
    return (
        <div>
            {Object.keys(productInCart).map((productId) => (
                <div key={productId}>
                    {productId} : {productInCart[productId]}
                </div>
            ))}
        </div>
    )
}
