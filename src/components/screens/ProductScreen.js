import React from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import products from '../../products'
import Rating from '../Rating'




function ProductScreen() {
    let { id } = useParams()

    const product = products.find((p) => p._id === id)
    return (
        <div style={{ marginLeft: '4rem' }}>
            <Link to='/' className='btn btn-dark my-3'>Go back</Link>
            <Row className='container-fluid'>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush' style={{ marginLeft: '2rem' }} >
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating}
                                text={`${product.numReviews}  reviews`}
                                color={'#f8e825'} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : USD {product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock>0?'In Stock':'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock===0} type='button'>
                                    Add to Cart
                                </Button>

                            </ListGroup.Item>



                        </ListGroup>

                    </Card>

                </Col>
            {product.name}
            </Row>
        </div>
    )
}

export default ProductScreen