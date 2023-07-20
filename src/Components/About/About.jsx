import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const About = ({ handleShowCart }) => {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
        <Container>
          <div style={{ marginLeft: "30vw" }}>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/home">HOME</Link>
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: "5vw" }}>
              <Link to="/" onClick={() => window.reload()}>
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
      <div
        style={{
          marginTop: ".25vh",
          height: "25vh",
          backgroundColor: "grey",
        }}
      >
        <center style={{ fontSize: "6rem", color: "white" }}>
          The Generics
        </center>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <center>
          <b style={{ fontSize: "2.4rem" }}>About</b>
        </center>
      </div>

      <div style={{ marginTop: ".5rem" }}>
        <div style={{ display: "flex" }}>
          <img
            src="https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000"
            alt=""
            style={{ margin: "20px", height: "55vh", width: "40vw" }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
              textAlign: "justify",
              margin: "20px",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, qui
            accusantium ducimus saepe voluptas reiciendis, nostrum cumque odio
            eum, esse dignissimos. Blanditiis, cupiditate, excepturi tempora
            aliquid voluptates accusantium consectetur corporis, hic explicabo
            non tempore. Quas itaque eveniet quos, debitis porro officia vitae
            harum optio facere earum dicta, praesentium doloremque laudantium
            illo deleniti laboriosam, dolores perspiciatis odit. Ullam incidunt
            impedit porro ipsam ipsa minima sint eligendi sapiente quam rem
            fugit delectus dolorem quidem quae neque nulla blanditiis,
            perspiciatis magnam ratione repellendus amet ut est unde! Iure
            impedit omnis ipsa voluptates tenetur. Quasi, ducimus illo nam
            tenetur natus et molestiae repellendus corrupti?
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
