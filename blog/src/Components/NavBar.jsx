import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { categories } from "../helpers/category";
import "../Css/NavBar.css"

function NavBar() {
  return (
    <Navbar collapseOnSelect className="" expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="fs-4">
          Cadmus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-5">
            <Link role="button" className="nav-link" to="/">
              Home
            </Link>

            <NavDropdown title="Blogs" id="collasible-nav-dropdown">
              {categories.map(({ genre }) => {
                return (
                  <Link
                    data-rr-ui-dropdown-itemdata-rr-ui-dropdown-item
                    className="dropdown-item"
                    role="button"
                    to={`/blogs/${genre}`}
                  >
                    {genre}
                  </Link>
                );
              })}
            </NavDropdown>

            <Link role="button" className="nav-link" to="/joinus">
              Join Us
            </Link>
            <Link role="button" className="nav-link" to="/aboutus">
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
