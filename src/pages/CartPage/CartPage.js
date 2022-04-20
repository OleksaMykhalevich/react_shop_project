import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductsListItemExtended'
import { Grid } from '@mui/material'
import { connect } from 'react-redux'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

const mapStateToProps = (state) => ({ productsInCart: state.productsInCart })

export default connect(mapStateToProps)(CartPage)
