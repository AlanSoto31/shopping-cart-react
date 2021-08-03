import React from 'react'

const Cart = ({cartProducts}) => {

    const products = cartProducts.length > 0 ? cartProducts.map(item => (
        <div key={item.id}>
            <div>{`${item.qty} pizza de ${item.type}`}</div>
        </div>
    )) : 'Add a pizza'

    return (
        <>
            <p>Your order is:</p>
            { products }
        </>
    )
}

export default Cart
