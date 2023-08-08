import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import land1 from "../images/land1.jpg"
import land2 from '../images/land2.jpg'
import land3 from '../images/land3.jpg'
import { Link } from 'react-router-dom'


const Landscaping = () => {
  return (
    <div>
  
      <h1 className='landbg'>Landscaping</h1>
     

            
        <Container className='landcont1'>
          <Row>
            <Col md='7'> 
                 <img src={land3}  alt='pic1landscape' className='picsland' />
            </Col>
            <Col>
                <h2>Landscape Design</h2>
              <p>It is the art of managing the environment by creating
                 feasible and cutting edge designs and plans as well as 
                 focusing on sustainability of these spaces, at Royal Red Properties
                  we carefully explain the design process and provide the client with 
                  bespoke designs. <br/><br/>
                  This involves the provision of planting and garden plans, 
                  Provision of irrigation plan, Drawing detailed  landscape layout, 
                  Outdoor planning plans and 3D visualization of landscape drawings.</p><br/>

                  <Link to='/quoteform'>Book an inspection</Link>
               </Col>
          </Row>
        </Container>


        <Container  className='landcont2'>
          <Row>
            <Col>
                  <h2>Landscape Maintenance</h2>
                  <p>Outdoor space and landscape requires careful care to continue
                     to look lush and healthy, by Controlling and Carrying out necessary
                      measures we maintain these spaces to continually looking lush and tidy.<br/><br/>

                    This Maintenance process includes: Lawn mowing, Lawn edging, 
                    Trees and Shrubs trimming, Trees and Shrubs pruning , Lawn rejuvenation
                     and grassing , Plant care and arboricultural works, Lawn and turf fertilization 
                     as well as Mulching and leaves blowing</p><br/>

                     <Link to='/quoteform'>Book an inspection</Link>
              </Col>
              <Col md='7'>
              <img src={land2}  alt='pic1landscape'className='picsland' />
                  
              </Col>
          </Row>
        </Container>


        <Container className='landcont3'>
          <Row>
            <Col md='7'><img src={land1}  alt='pic1landscape' className='picsland' /></Col>
            <Col>
           <h4> Landscape Construction</h4>
              <p>Requires careful precision and Implementing of landscape
                 plans and designs, from the sketch and plans to a reality
                  standpoint. We carefully utilize the top quality planting
                   materials and product to ensure we provide the client with lush landscape.<br/><br/>

                  Our construction process includes: Grass planting and turf establishment,
                   Flower garden installation, Rooftop garden installation, Rock garden installation ,
                    Pergola and wood fence installation, Irrigation system installation , 
                    Landscape lights installation, Fountain installation ,
                     Swimming pool and pond construction, Pavement blocks installation, 
                     Stamp concrete installation and Vertical garden installation.
               </p><br/>
               <Link to='/quoteform'>Book an inspection</Link>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Landscaping
