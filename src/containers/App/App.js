import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { omit } from 'lodash'

export const App = () => {
    return (
        <>
            <CssBaseline />

            <Main />

            <Footer />
        </>
    )
}
