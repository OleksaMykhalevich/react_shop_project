import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'

export const ProductsListItem = ({
    calcCart,
    cartData,
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    const [count, setCount] = useState(0)

    const onDecrementClick = () => {
        setCount(count - 1)
    }
    const onIncrementClick = () => {
        setCount(count + 1)
    }

    cartData.count = count
    cartData.price = price
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="iphone"></img>
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>

                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="product-price">{price} $</div>
                </CardContent>
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        onClick={onDecrementClick}
                        disabled={count <= 0}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="contained"
                        onClick={onIncrementClick}
                        disabled={count >= 5}
                    >
                        +
                    </Button>
                </div>

                <CardActions className="wrap-btn-add-to-cart">
                    <Button
                        variant="outlined"
                        className="wrap-btn-add-to-cart"
                        onClick={calcCart}
                        disabled={count <= 0}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
ProductsListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}
ProductsListItem.defaultProps = {
    description: 'No description ...',
    image: '/images/no-image.png',
}
