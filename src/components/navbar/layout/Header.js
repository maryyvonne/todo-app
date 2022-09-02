import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsCheck2All } from "react-icons/bs";
import { Sidebar } from './Sidebar';

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Navbar bg='light' className='mb-3' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <BsCheck2All />
            TodoApp
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand`}
            onClick={handleShow}
          />
          <Sidebar show={show} handleClose={handleClose} />
        </Container>
      </Navbar>
    </>
  );
};

