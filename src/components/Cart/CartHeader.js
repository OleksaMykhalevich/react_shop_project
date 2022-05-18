import React from 'react'
import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'
import { useSelector } from 'react-redux'

export const CartHeader = () => {
    const productsInCart = useSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
