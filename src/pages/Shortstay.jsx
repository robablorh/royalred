import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Shortstay = () => {
  const[stays, setStays]=useState([])

  const fetchStays=async()=>{

    try {
      const response = await axios.get()
      const data = await response.data
       setStays(data)
 
      
    } catch (error) {
      console.error(error);
      
    }

    
    useEffect(()=>{
      fetchStays();
    },[])
      
  }

  return (
    <div>
      <h1>SHORT-STAYS</h1>
      <Container>
        <Row>
        {
        stays.map((stay)=>(
          <Col key={stay.id}>
              <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={stay.url} />
                          <Card.Body>
                            
                            <Card.Text>
                              <p>Location:{stay.locstion}</p>
                              <p>Type:{stay.type}</p>
                              <p>Rooms:{stay.rooms}</p>
                            
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

export default Shortstay
