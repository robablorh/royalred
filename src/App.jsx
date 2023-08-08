import Reacts from "react"
import Navbars from "./components/Navbars"
import {Container, Col , Row } from "react-bootstrap"
import Router from "./Router"
import Foot from "./components/Foot"




function App() {
  

  return (
    
      <div>

         
      <Navbars/>
       
       <Container>

       <Row>

        <Col><Router/></Col>

       </Row>


       </Container>

       <Foot/>

       
      </div>
  )
}

export default App
