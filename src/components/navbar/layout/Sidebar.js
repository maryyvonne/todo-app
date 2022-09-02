import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand`}
        aria-labelledby={`offcanvasNavbarLabel-expand`}
        placement='end'
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <button
            type='button'
            class='btn-close'
            aria-label='Close'
            onClick={handleClose}
          ></button>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id={`offcanvasNavbarDropdown-expand`}>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};
