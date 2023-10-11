import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar style={{background:"hsla(34, 84%, 44%, 0.863)"}} >
  
      <Navbar.Brand as= {Link} to="/">React</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as= {Link} to="/">Home</Nav.Link>
        <Nav.Link as= {Link} to="/About">about</Nav.Link>
        <Nav.Link as= {Link} to="/Contact">contact</Nav.Link>
       
      </Nav>
  </Navbar>
  )
}

export default Header