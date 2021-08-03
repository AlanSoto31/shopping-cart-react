import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Navbar = ({renderCart, cartPage, productsQty}) => {
    return (
        <Nav className="navbar navbar-light bg-light d-flex justify-content-between align-content-center px-5">
            <h1>Aldini's Pizza</h1>
            <Button onClick={renderCart} >{cartPage ? 'Products': `Cart (${productsQty})`}</Button>
        </Nav>
    )
}

export default Navbar
