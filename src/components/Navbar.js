import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const Navigation=()=>{
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand >NANIMEX69</Navbar.Brand>
                <Nav>
                <Nav.Link>MOST VIEWED</Nav.Link>
                <Nav.Link>TRENDING</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation