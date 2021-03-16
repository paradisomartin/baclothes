import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Buenos Aires Clothes</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Inicio</Nav.Link>
                    <Nav.Link>Destacados</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Buzos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                        {/* <NavDropdown.Divider />     esta bueno para dividir */}
                        <NavDropdown.Item href="#action/3.4">Zapatillas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Escribe aqui" className="mr-sm-2" />
                    <Button variant="outline-light"><i className="fas fa-search"></i></Button>
                </Form>
                    <Nav.Link>Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

