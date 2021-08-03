import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Pizza = ({product, add}) => {

    return (
        <Col sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top card-img" src={product.img_url} />
                <Card.Title className="font-weight-bold text-center my-2">
                    {product.type}
                </Card.Title>
                <Card.Body className="d-flex flex-column justify-content-end ">
                    <Card.Text className={'text-center'}>
                       ${product.price}
                    </Card.Text>
                    <Button variant="warning" onClick={() => add(product)}>Add to cart</Button>
                </Card.Body>
            </Card>
      </Col>
    )
}

export default Pizza
