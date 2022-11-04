import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, ButtonGroup, NavDropdown, Dropdown } from "react-bootstrap";
import './Navbar.scss'
import logo from '../assets/logo.png'

const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
        <Link to='/'>
        <img 
        src={logo}
        height="30" 
        className="d-inline-block align-top me-5"
        alt="Magbank logo" />
        </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav fab" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-light">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
              <Dropdown.Item>
                <Link to='/login'>Pessoa Física</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to='/login'>Pessoa Jurídica</Link>
              </Dropdown.Item>
            </NavDropdown>
          </Button>
          <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation;