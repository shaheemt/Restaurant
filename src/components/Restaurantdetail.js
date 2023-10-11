import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Restaurantdetail.css'
import { Container,Card } from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Restaurantdetail() {

  const restaurants = useSelector((store) => store.restaurants.data);

  const {id} = useParams();
  
  // const [restaurants , setRestaurants] = useState([]);

  // useEffect(() => {
  //   let fetchRestaurants = async () => {
  //     let data = await fetch ("./restaurants.json")
  //                .then((res) => res.json())
  //                .catch((err) => console.log(err));
  //     // setRestaurants(data.restaurants);
  //    
  //   }
  //   fetchRestaurants();
  
  // }, [])

  let findRestaurant = restaurants && restaurants.find((item) => item.id == id);
  return (
   
      <div className='bodys'>
        {
          findRestaurant && 

        <div>
          < Card className='cards'>
            <Card.Title className='name1'> {findRestaurant.name} </Card.Title>
      <Card.Img className='imges' variant="top" src={`${findRestaurant.photograph}`} />
      <Card.Body>
        <Card.Text>
            place : {findRestaurant.neighborhood}
           <div>
            Location : {findRestaurant.address}
            </div>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card className='content1' style={{ background: 'hwb(34 18% 6% / 0.884)' }}>
              <Card.Header as='h5' className='header1' style={{textShadow:"2px 2px black"}}>
                Opening hours
              </Card.Header>
              <Card.Body>
                <table className='table1'>
                  <thead>
                  <tr>
                    <td className='column1'>DAY</td>
                    <td className='column1'>TIME</td>
                  </tr>
                  </thead>
                  <tr>
                    <th>Monday</th>
                    <th>{findRestaurant.operating_hours.Monday}</th>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <th>{findRestaurant.operating_hours.Tuesday}</th>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <th>{findRestaurant.operating_hours.Wednesday}</th>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <th>{findRestaurant.operating_hours.Thursday}</th>
                  </tr>
                  <tr>
                    <th>Friday</th>
                    <th>{findRestaurant.operating_hours.Friday}</th>
                  </tr>
                  <tr>
                    <th>Saturday</th>
                    <th>{findRestaurant.operating_hours.Saturday}</th>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <th>{findRestaurant.operating_hours.Sunday}</th>
                  </tr>
                </table>
              </Card.Body>
            </Card>
     
      </div>
        }
       
      </div>
    
    
  )
}

export default Restaurantdetail