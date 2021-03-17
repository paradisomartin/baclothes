import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../Product/Product';
import axios from 'axios';

export default function Home(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return(
        <Container>
            <Row className='my-2 pt-4 justify-content-center'>
                <h1>Inicio</h1>
            </Row>
            <Row className='py-3 my-3'>
                {
                    products.map( (x) => (
                    <Col key={x._id} xl={4} lg={6} md={6} sm={12}>
                        <Product data={x} />
                    </Col>
                    ))
                } 
            </Row>
        </Container>
    )
};