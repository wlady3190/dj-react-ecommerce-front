import React, { useState, useEffect } from 'react'
// import products from '../../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../Product'
import axios from 'axios'


function HomeScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('http://localhost:8000/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className='text-center'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm='12' md='6' lg='4' xl='3'>

            {/* <h3>{product.description}</h3> */}
            <Product product={product} />

          </Col >
        ))}
      </Row>
    </div>
  )
}


export default HomeScreen