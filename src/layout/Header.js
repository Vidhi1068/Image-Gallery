import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="#">ImageGallery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/Mobile">
              Mobile
            </Nav.Link>
            <Nav.Link as={Link} to="/cloth">
              Cloth
            </Nav.Link>
            <Nav.Link as={Link} to="/Jewellary">
              Jewellary
            </Nav.Link>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
