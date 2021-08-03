import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const Navbar = () => {
    return (
        <Nav className="navbar navbar-light bg-light d-flex justify-content-between align-content-center px-5">
            <h1>Trattoria Aldini</h1>
            <Button>Cart</Button>
        </Nav>
    )
}

export default Navbar
