import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const Nav = ({ handleShowCart }) => {
  const user = useContext(UserContext);

  const handleCartShow = () => {
    handleShowCart();
  };
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
        <Container>
          <div style={{ marginLeft: "22vw" }}>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/home">HOME</Link>
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/">STORE</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/about">ABOUT</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </div>
          <div>
            <Button variant="primary" onClick={handleCartShow}>
              Cart
            </Button>
            <span
              style={{ color: "magenta", marginLeft: "5px", fontSize: "22px" }}
            >
              {user.cartCnt}
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
