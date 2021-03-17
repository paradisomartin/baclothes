import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <LinkContainer to='/'>
                <Navbar.Brand href="#home">Buenos Aires Clothes</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* Linkear con router bootstrap bien */}
                <Nav className="mr-auto">
                    <Nav.Link>Destacados</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Buzos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Zapatillas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Escribe aqui" className="mr-sm-2" />
                    <Button variant="outline-light"><i className="fas fa-search"></i></Button>
                </Form>
                    <LinkContainer to='/cart'>
                        <Nav.Link>Cart <i className="fas fa-shopping-cart"></i></Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

