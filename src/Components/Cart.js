import React from 'react'
import Button from 'react-bootstrap/Button'

const Cart = ({cartProducts, add, removeOne, removeProduct}) => {

    const products = cartProducts.length > 0 ? cartProducts.map(item => (
        <div key={item.id} className={'d-flex justify-content-between align-content-center w-50 px-3 my-3'}>
            <div>{`${item.qty} pizza de ${item.type}`}</div>
            <div>
                <Button variant="success" onClick={() => add(item)}>+</Button>
                <Button variant="danger" onClick={() => removeOne(item)}>-</Button>
                <Button variant="danger" onClick={() => removeProduct(item)}>x</Button>
            </div>

        </div>
    )) : 'Add a pizza'

    return (
        <div className={''}>
            <p>Your order is:</p>
            { products }
        </div>
    )
}

export default Cart
