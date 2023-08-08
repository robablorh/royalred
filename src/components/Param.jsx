import React, { useEffect, useState, } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Param = () => {
   const { id } = useParams();
  const [hambs, setHambs] = useState([])

  const fetchRent= async () => {
    try {
        const response = await axios.get("http://localhost:3000/rent")
        const data = await response.data
        console.log(data)
        setHambs(data);
        
    } catch (error) {
        console.error(error);
        
    }
  };

  useEffect(()=>{
        fetchRent() 
    } , [])

console.log(hambs)


  return (
    <div>
        <Container>
            <Row>
           
              {
                hambs.map((rent) => {
                    if(id === rent.id){
                        return(
                            <div key={rent.id}>
                <Col md='6' >
                      <img src={rent.url}/>
                </Col>
                <Col md='6'>
                    <p>{rent.location}</p>
                    <p>{rent.type}</p>
                    <p>{rent.room}</p>
                
                </Col>
                </div>
                        )
                    }
                })
             } 
            </Row>
        </Container>
      
    </div>
  );
}

export default Param
