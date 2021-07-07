import { Navbar, Container, Nav } from "react-bootstrap";

import Link from "next/link";

function MarketingLayout(props: any) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Index</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link href="/signin">
                  <p className="btn btn-outline-primary"> Sign in</p>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/signup">
                  <p className="btn btn-primary"> Sign Up</p>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}
    </>
  );
}

export default MarketingLayout;
