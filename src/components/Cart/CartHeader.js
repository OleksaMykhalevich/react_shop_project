import React from 'react'

export const CartHeader = ({ cartData }) => {
    return (
        <div>
            <div>{cartData.totalCount}</div>
            <div>${cartData.totalPrice}</div>
        </div>
    )
}
