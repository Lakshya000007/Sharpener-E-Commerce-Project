import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
        <Container>
          <div style={{ marginLeft: "30vw" }}>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/home">HOME</Link>
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/" onClick={() => window.reload(false)}>
                STORE
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/about">ABOUT</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </div>
        </Container>
      </Navbar>
      <Footer />
    </>
  );
};

export default Home;
