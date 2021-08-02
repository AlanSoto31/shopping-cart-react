import React from 'react'
import Cart from './Cart'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav className="navbar navbar-light bg-light d-flex justify-content-between align-content-center px-5">
            <h1>Trattoria Aldini</h1>
            <Cart />
        </Nav>
    )
}

export default Navbar
