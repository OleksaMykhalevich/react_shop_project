import React, { useState } from 'react'
import { keys } from 'lodash'
import { CartTotal } from './CartTotal'

import {
    getProductsObject,
    productsArray,
} from 'components/products/productsArray'
import { CartProductList } from 'components/Cart/CartProductList'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
