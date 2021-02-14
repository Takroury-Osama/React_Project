import react, {useState} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
//import image from '../img/Free_Sample.jfif'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = (props) => {

  return (
    <div>
  <Navbar className="darkColor fixedUp" collapseOnSelect expand="lg" bg="dark" variant="dark">
  {
    //  }  <Navbar.Brand href="home"><img src={image} /></Navbar.Brand>
  }
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
    <Nav.Link href="home">Home</Nav.Link>
    <Nav.Link href="booking">Vehicle Licensing</Nav.Link>
    <NavDropdown title="Services" id="collasible-nav-dropdown">
      <NavDropdown.Item href="consultation">Consultaion</NavDropdown.Item>
      <NavDropdown.Item href="maintenance">Maintenace</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default Header
