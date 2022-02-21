import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/Products/ProductList'

export const Main = ({ calcCart, cartData }) => {
    return (
        <>
            <Container>
                <ProductList calcCart={calcCart} cartData={cartData} />
            </Container>
        </>
    )
}
