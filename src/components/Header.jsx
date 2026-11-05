// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from 'react-bootstrap/Badge';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fiexd-top">
      <Container>
        <Navbar.Brand ><Link to={'/'} className="text-white text-decoration-none fw-bold" >  <FontAwesomeIcon icon="truck-fast"  />   E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <input type="text" placeholder="Search your products" className="form-control" />

            </Nav.Item>

              <Link to={'/wishlist'} className="text-light text-decoration-none fw-bold ms-5"> <FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2' /> Wishlist <Badge bg="secondary">10</Badge>   </Link>
              <Link to={'/cart'} className="text-light text-decoration-none fw-bold ms-5">   Cart <Badge pill bg="secondary">10</Badge>   </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
