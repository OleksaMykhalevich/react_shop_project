import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'

export const Main = ({ addProductToCart, productsInCart }) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="products"
                        element={
                            <ProductList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
        </>
    )
}
