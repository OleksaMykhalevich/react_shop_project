import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { omit } from 'lodash'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 2,
        2: 2,
    })
    const [likeProductsState, setLikeProductsState] = useState({
        1: false,
        2: false,
    })
    console.log(likeProductsState)
    const changeLikeState = (id) => {
        setLikeProductsState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    const addProductToCart = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => {
            return omit(prevState, [productId])
        })
    }

    const changeProductQuantity = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />

            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
                changeLikeState={changeLikeState}
                likeProductsState={likeProductsState}
            />

            <Footer />
        </>
    )
}
