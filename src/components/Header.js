import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("successfully Logged Out");
    navigate("/login");
  };

  const navigateToViewProfile = () => {
    navigate("/view-profile");
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Expense App</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">
              Dashboard
            </Link>
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={navigateToViewProfile}>
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
