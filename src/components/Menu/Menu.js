import React from 'react'
import { Button } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

const setNavLinkClass = ({ isActive }) => (isActive ? 'nav-link' : '')
export const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <NavLink className={setNavLinkClass} to="/">
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/products">Products</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/payment">Payment</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="/shipping">Shipping</NavLink>
            </Button>
        </>
    )
}
