import { Container, Row, Col } from 'react-bootstrap';
import products from '../../products';
import Product from '../Product/Product';

export default function Home(){
    
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