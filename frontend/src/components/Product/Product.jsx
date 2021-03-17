import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '../Rating/Rating.jsx';
import {Link} from 'react-router-dom';

export default function Product({data}){

    return(
        <Card className='my-2 p-2 rounded'>
            <Card.Img variant="top" src={data.image} />
            <Card.Body style={{height: '14rem'}}>

                <Card.Title style={{height: '2rem'}}> <Link style={{color: 'black'}} to={`/product/${data._id}`}>{data.name}</Link> </Card.Title>

                <Card.Text as='div' className='pt-3'>
                    <Rating value={data.rating} text={`${data.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>${data.price}</Card.Text>

                <Button variant="outline-dark">Agregar al Carro <i className="pl-1 fas fa-cart-plus"></i></Button>

            </Card.Body>
        </Card>
    )
}