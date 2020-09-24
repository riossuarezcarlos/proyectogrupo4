import React from 'react'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function CNavbar(){
 return(
     <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="/home">Empresa ABC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
            <Form inline className="mr-auto">
                    <FormControl type="text" placeholder="¿Qué estás buscando?" className="mr-sm-2" />
                   <Button variant="outline-info">Buscar</Button>
            </Form>
            <Nav>
                <Nav.Link href="#home">Usuario</Nav.Link>
                <Nav.Link href="#pricing">Carrito</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     </div>
 )   
}