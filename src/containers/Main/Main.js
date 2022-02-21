import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/Products/ProductList'

export const Main = ({ addProductToCart }) => {
    return (
        <>
            <Container>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}
