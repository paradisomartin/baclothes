import {Container, Row, Col} from 'react-bootstrap';

export default function Footer(){
    return(
        <Container>
            <Row className='text-center my-3'>
                <Col> &copy;  Martin Paradiso, todos los derechos reservados  </Col>
            </Row>
        </Container>
    );
}