import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/Products/ProductList'

export const Main = ({ addProductToCart, cartData }) => {
    return (
        <>
            <Container>
                <ProductList
                    addProductToCart={addProductToCart}
                    cartData={cartData}
                />
            </Container>
        </>
    )
}
