import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Buy = () => {
  const[buys, setBuys]=useState([])


  const fetchBuy = async()=>{
    try {
      const response = await axios.get("http://localhost:3000/Buy")
      const data = await response.data
      setBuys(data)
      console.log(buys)
      
    } catch (error) {

      log.error(error);
      
    }
}

  useEffect(()=>{
    fetchBuy();
    },[])



  return (
      <div>
        <h1>Now Selling</h1>
        <Container>
          <Row>
            {
              buys.map((buy)=>(
                <Col key={buy.id}>              
                    <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={buy.url} />
                          <Card.Body>
                            
                            <Card.Text>
                              <p>Location:{buy.locstion}</p>
                              <p>Type:{buy.type}</p>
                              <p>Rooms:{buy.rooms}</p>
                            
                            </Card.Text>
                          <Link>See more</Link>
                          </Card.Body>
                        </Card>
               </Col>  
  









              ))
            }
          </Row>
        </Container>


      </div>
  )
}

export default Buy
