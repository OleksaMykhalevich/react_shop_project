import { Delete } from '@mui/icons-material'
import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Quantity } from 'components/Quantity/Quantity'
import React from 'react'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})
export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img src={product.image} className={classes.media} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one items: {product.price}</div>
                    <div>Count: {productCount}</div>
                    <Quantity
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <Button variant="outlined">
                        <Delete
                            onClick={() => removeProductFromCart(product.id)}
                        />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
