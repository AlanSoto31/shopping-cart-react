import React from 'react'
import Pizza from './Pizza'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const List = ({listState}) => {

    const products = listState.map( product => (
        <Pizza key={product.id} product={product} />
    )) 

    return (
        <>
            <Container className="mt-4">
                <Row className="g-4">
                    {products}
                </Row>
            </Container>
        </>
    )
}

export default List
