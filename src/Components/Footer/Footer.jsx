import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Navbar bg="primary" style={{ height: "120px" }}>
        <Container>
          <div style={{ color: "white", fontSize: "3rem" }}>The Generics</div>
          <div>
            <Nav className="me-auto">
              <Nav.Link href="#youtube">
                <BsYoutube
                  style={{
                    fontSize: "2.5rem",
                    backgroundColor: "red",
                    margin: "3vw",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#spotify">
                <BsSpotify
                  style={{
                    fontSize: "2.5rem",
                    backgroundColor: "violet",
                    margin: "3vw",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#facebook">
                <BsFacebook
                  style={{
                    fontSize: "2.5rem",
                    backgroundColor: "blue",
                    margin: "3vw",
                  }}
                />
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
