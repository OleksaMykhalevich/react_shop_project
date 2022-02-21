import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { useState } from 'react'

export const App = () => {
    const [productInCart, setProductInCart] = useState({
        1: 5,
        2: 3,
    })

    const addProductToCart = () => {}

    return (
        <>
            <CssBaseline />
            <Header productInCart={productInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </>
    )
}
