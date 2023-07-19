import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { UserContext } from "../../App";

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
            <Navbar.Brand href="#home" style={{ marginRight: "5vw" }}>
              HOME
            </Navbar.Brand>
            <Navbar.Brand href="#home" style={{ marginRight: "5vw" }}>
              STORE
            </Navbar.Brand>
            <Navbar.Brand href="#home">ABOUT</Navbar.Brand>
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
