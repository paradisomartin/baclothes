import Rating from '../Rating/Rating'
import {Row, Col, Image, Button, Container, ListGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProductPage({ match }){
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        };
        
        fetchProduct();

    }, [ match ]);

    return(
        <Container>
            <Link  to='/' className='btn btn-outline-dark m-3 p-3'>Atrás</Link>
            <Row>
                <Col md={2}>
                
                </Col>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="outline-dark" disabled={product.countInStock === 0}>Agregar al Carro <i className="pl-1 fas fa-cart-plus"></i></Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {product.countInStock > 0 ? 'Hay unidades disponibles' : 'Out of stock'}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    )
};