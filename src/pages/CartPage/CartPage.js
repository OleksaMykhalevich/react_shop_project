import React from 'react'
import { keys } from 'lodash'
import { CartProductList } from 'components/Cart/CartProductList'
import { CartTotal } from 'components/Cart/CartTotal'

export const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart</h1>
            <div>
                <CartProductList productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}
