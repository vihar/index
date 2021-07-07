import Link from "next/link";

import SignOutView from "@components/signOut";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

function UserLayout(props: any) {
  return (
    <>
      <Navbar className="border-bottom" expand="lg">
        <Container className="" fluid>
          <Navbar.Brand className="fw-bold">
            <Link href="/">
              <a className="text-decoration-none">Index</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className="nav-item fw-bold px-3">
                <Link href="/signup">
                  <a className="text-decoration-none">
                    <SignOutView />
                  </a>
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {props.children}
    </>
  );
}

export default UserLayout;
