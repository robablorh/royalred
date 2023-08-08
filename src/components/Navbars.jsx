import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>

      <Navbar bg="light" variant="light">

          <Link><Navbar.Brand href="#home">ROYAL RED PROPERTIES</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/buy" className='nav-link'>Buy</Link>
            <Link to="/rent"  className='nav-link'>Rent</Link>
            <Link to="/shortstay"className='nav-link'>Short-Stay</Link>
            <Link to="/propertyvaluation" className='nav-link'>Property Valuation</Link>
            <Link to="/propertyregistration"className='nav-link'>Property Registration</Link>
            <Link to="/landscaping"className='nav-link'>Land-Scaping</Link>
            <Link to="/buildingconsultation"className='nav-link'>Building Consulting</Link>
            
           
          </Nav>
          <Link href="#pricing"className='nav-link fright' >Sign Up</Link> &nbsp;/
            <Link href="#pricing"className='nav-link'>Login</Link>
          
        
      </Navbar>
  
      
    </div>
  )
}

export default Navbars
