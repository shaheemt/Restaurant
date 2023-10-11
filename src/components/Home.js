import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { getRestaurantData } from './RestaurantSlice';
import { useDispatch,useSelector } from 'react-redux';
  
function Home() {

  const restaurants = useSelector((store) => store.restaurants.data);
  
  const Dispatch = useDispatch();

  // const [restaurants , setRestaurants] = useState([]);

  useEffect(() => {
    let fetchRestaurants = async () => {
      let data = await fetch ("./restaurants.json")
                 .then((res) => res.json())
                 .catch((err) => console.log(err));
      // setRestaurants(data.restaurants);
      Dispatch(getRestaurantData(data.restaurants))
    }
    fetchRestaurants();
  
  }, [])
  console.log(restaurants);
  
  return (
      <div className='color'>
      <Row className= 'row'>
        {
          restaurants && restaurants.map((restaurant) => (
        <Col className='mt-4' md={3} key={restaurant.id}>
    <Card className='card1'>
      <Card.Img className='img1' variant="top" src = {`${restaurant.photograph}`} />
      <Card.Body className='body1'>
        <Card.Title className='title'>{restaurant.name}</Card.Title>
        <Card.Text className='text'>
          
        <br/> Cuisine: {restaurant.cuisine_type} 
        <br/>{restaurant.address}
        </Card.Text>
        <div className='butto'>
        <Button className='button' as={Link} to={`/Restaurantdetail/${restaurant.id}`} variant="primary">Go details </Button>
        </div>
      
      </Card.Body>  
    </Card>
   </Col>
        ))

       }
      </Row>
      </div>
   
    
 
 
  )
}

export default Home