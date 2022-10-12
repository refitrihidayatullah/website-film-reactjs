import { Navbar, Nav, Container } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>[RF]FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
