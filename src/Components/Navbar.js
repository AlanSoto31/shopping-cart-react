import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Navbar = ({renderPage, productsQty}) => {
    return (
        <Nav className="navbar navbar-light bg-light d-flex justify-content-between align-content-center px-5">
            <h1>Aldini's Pizza</h1>
            <div>
                <Button onClick={() => renderPage('PRODUCTS')} > Products </Button>
                <Button className='mx-3' onClick={() => renderPage('HISTORY')} > History </Button>
                <Button onClick={() => renderPage('CART')} >{`Cart (${productsQty})`}</Button>
            </div>
        </Nav>
    )
}

export default Navbar
