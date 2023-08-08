import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import build from '../images/build.jpg'
import rent from '../images/rent.jpg'
import rent1 from '../images/rent1.jpg'
import luxury from '../images/luxury.jpg'
import build2 from '../images/build2.jpg'
import build3 from '../images/build3.jpg'
import lux from '../images/lux.jpg'
import lux1 from '../images/lux1.jpg'
import furn from '../images/furn.jpg'
import furn2 from '../images/furn2.jpg'
import rent2 from '../images/rent2.jpg'
import rent3 from '../images/rent3.jpg'
import reg from '../images/reg.jpg'
import reg2 from '../images/reg2.jpg'
import reg3 from '../images/reg3.jpg'
import val from '../images/val.jpg'
import val2 from '../images/val2.jpg'
import val3 from '../images/val3.jpg'
import lans from '../images/lansjpg.jpg'
import lans2 from '../images/lans2.jpg'
import lans3 from '../images/lans3.jpg'
import caro from '../images/caro.jpg'




const Home = () => {
  return (
    <>

    <Container>

        <Row>
            <Col> <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro}
          alt="First slide"
        />
        
      </Carousel.Item>
     </Carousel>
          </Col>
        </Row>
         
    </Container>

















    
    <Container>
        <Row>
            <Col className='col1'>
              <h1>Bring your dream home to life with one-on-one design 
                help & hand-picked products tailored to your style, space,
                 and budget.</h1>
            </Col>
        </Row>
    </Container>


    

    <Container>
        <Row>

            <Col md='5'>
                <h4>BUY LUXURY AT A COOL PRICE</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we will help you
                     design a space you love. 
                  </p>
            
            </Col>



            <Col>

        
                    <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={lux1}
                            alt="First slide"
                            /> 
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={luxury}
                            alt="Second slide"
                            />

                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={lux}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                        </Carousel>
             </Col>

        </Row>
     </Container>


     <Container>
     <Row>

         <Col>
         <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={rent1}
                            alt="First slide"
                            /> 
                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={rent2}
                            alt="Second slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={rent3}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                        </Carousel>
         
         
         </Col>
         <Col>
               <h4>RENT? WE GOT YOU!</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
         
         
         </Col>

     </Row>
  </Container>


  <Container>
  <Row>

      <Col>
              <h4>FURNISHED APPARTMENTS FOR SHORT STAYS</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
      
      </Col>
      <Col>
      <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={rent}
                            alt="First slide"
                            /> 
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={furn}
                            alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={furn2}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                        </Carousel>
      
      </Col>

  </Row>
</Container>
<Container>
        <Row>

            <Col>
            <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={reg}
                            alt="First slide"
                            /> 
                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={reg2}
                            alt="Second slide"
                            />

                           
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={reg3}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                        </Carousel>
            
            
            </Col>
            <Col><h4>GET YOUR PROPERTIES REGISTERED WITH US</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
            </Col>

        </Row>
     </Container>
     <Container>
     <Row>

         <Col><h4>YOU WANT TO BULD? TALK TO US</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
        </Col>
         <Col>
         <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={build}
                            alt="First slide"
                            /> 
                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={build2}
                            alt="Second slide"
                            />

                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={build3}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                        </Carousel>
         
         </Col>

     </Row>
  </Container>
  <Container>
  <Row>

      <Col>
      <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={val3}
                            alt="First slide"
                            /> 
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={val2}
                            alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={val}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                        </Carousel>
      
      
      </Col>
      <Col>
               <h4>LET US HELP YOU VALUE YOUR PROPERTY</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
        </Col>

  </Row>
</Container>
<Container>
        <Row>

            <Col>
            <h4>BEAUTIFY YOUR ENVIRONMENT</h4>
                <p>Have big dreams for your space? Share your 
                    inspiration, goals, and budget and we’ll help you
                     design a space you love. 
                  </p>
            
            </Col>
            <Col>
            <Carousel slide={false}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={lans}
                            alt="First slide"
                            /> 
                          
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={lans2}
                            alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={lans3}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
            
            </Col>

        </Row>
     </Container>

     </>
  )
}

export default Home
