import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Footer } from 'containers/Footer/Footer'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { useState } from 'react'

export const App = () => {
    const [cartData, setCartData] = useState({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count, price) =>
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + price * count,
        }))
    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} cartData={cartData} />
            <Footer />
        </>
    )
}
