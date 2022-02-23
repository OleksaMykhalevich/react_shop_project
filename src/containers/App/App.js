import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { useState } from 'react'
import { productsArray } from 'components/Products/productsArray'

export const App = () => {
    const [productInCart, setProductInCart] = useState({})

    const addProductToCart = (product) => {g}

    return (
        <>
            <CssBaseline />
            <Header productInCart={productInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
