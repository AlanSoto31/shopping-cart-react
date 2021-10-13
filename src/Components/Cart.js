import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import currentDate from './currentDate'

const Cart = ({cartProducts, add, removeOne, removeProduct, storeCart }) => {

    const total = cartProducts.reduce((a, b) => a + (b.qty * b.price), 0).toFixed(2)
    const items = cartProducts.map(item => {
        return {type: item.type, qty: item.qty}
    })

    const products = cartProducts.length > 0 ? cartProducts.map(item => (
        <div key={item.id} className={'d-flex justify-content-between align-items-center my-3'}>
            <div>
                <Button variant="success" onClick={() => add(item)}>+</Button>
                <Button variant="danger" onClick={() => removeOne(item)}>-</Button>
                <Button variant="danger" onClick={() => removeProduct(item)}>x</Button>
            </div>
            <div>{`Pizza de ${item.type}`}</div>
            <div>{`${item.qty} x $${item.price.toFixed(2)}  = $${item.qty * item.price}`}</div>
        </div>
    )) : 'Add a pizza please'

    const handleClick = () => {
        const fullDate = currentDate()

        const history = {
            date: fullDate,
            total: total,
            items: items,
        } 
        storeCart(history)
    }

    return (
        <Container>
            <div className='w-50 d-flex flex-column justify-content-center align-items-end px-3'>
                <div className='w-100'>{ products }</div>
                <div className='text-align-right'></div>{cartProducts.length > 0 ? `Total = $ ${total}` : ''}
                {cartProducts.length > 0 ? <Button onClick={handleClick}>Checkout</Button> : ''}
            </div>
        </Container>
    )
}

export default Cart
