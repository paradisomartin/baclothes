import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating.jsx';

export default function Product({data}){

    return(
        <Card className='my-2 p-2 rounded'>
            <Card.Img variant="top" src={data.image} />
            <Card.Body style={{height: '23rem'}}>

                <Card.Title>{data.name}</Card.Title>
                
                <Card.Text>
                    {data.description}
                </Card.Text>

                <Card.Text as='div' className='pt-3'>
                    <Rating value={data.rating} text={`${data.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>${data.price}</Card.Text>

                <Button variant="outline-dark">Agregar al Carro <i className="pl-1 fas fa-cart-plus"></i></Button>

            </Card.Body>
        </Card>
    )
}