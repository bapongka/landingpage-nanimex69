import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="/">NANIMEX69</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#mostviewed">MOST VIEWED</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
