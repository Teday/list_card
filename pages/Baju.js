import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import HomePage from '../container/index'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link active href="/Baju">Baju</Nav.Link>
            <Nav.Link href="/Celana">Celana</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomePage />
      <div style={{ position: 'fixed', left: 0, bottom: 0,width: '100%',backgroundColor: 'black',color: 'white',textAlign: 'center', zIndex: 99 }}>
        <p style={{ marginTop: '6px' }}>&copy; {new Date().getFullYear()} Copyright: Tedi Suryadi</p>
      </div>
    </Container>
  )
}
