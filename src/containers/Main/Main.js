import React from 'react'
import { Container } from '@mui/material'
import { ProductsList } from 'components/Products/ProductsList'
import { Routes, Route } from 'react-router-dom'
import { CartPage } from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'

export const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductsList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="products"
                        element={
                            <ProductsList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                </Routes>
            </Container>
        </>
    )
}
