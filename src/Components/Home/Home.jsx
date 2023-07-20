import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FcMusic } from "react-icons/fc";

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
      <div
        style={{
          marginTop: ".25vh",
          height: "48vh",
          backgroundColor: "grey",
        }}
      >
        <center style={{ fontSize: "4.5rem", color: "white" }}>
          The Generics
          <div>
            <span
              style={{
                fontSize: "1.4rem",
                color: "white",
                border: "2px solid aqua",
                padding: "8px",
              }}
            >
              Get Our Latest Album
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: "3rem",
                color: "white",
                border: "2px solid blue",
                padding: "8px",
                backgroundColor: "white",
              }}
            >
              <FcMusic />
            </span>
          </div>
        </center>
      </div>
      <div>
        <center style={{ fontSize: "2rem" }}>
          <b>Tours</b>

          <div
            style={{
              fontSize: "1rem",
              textAlign: "justify",
              margin: "15px 10px 15px 10px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            voluptate, cupiditate a aliquid adipisci ullam nemo eum
            exercitationem modi dolorum autem maxime earum iure obcaecati sequi
            ipsum quasi iste praesentium laudantium inventore veniam, minima
            delectus asperiores ipsam! Neque laboriosam soluta dignissimos.
            Deserunt suscipit quidem, veniam perspiciatis provident dolor
            corporis temporibus quod voluptate, dolorem numquam harum ipsa a
            atque reiciendis at illum amet voluptatem, asperiores ducimus et
            repellendus odit aliquam? Repellat dolores exercitationem corrupti
            soluta impedit distinctio et odit sed sunt, eaque tempora
            perspiciatis sapiente, excepturi at animi eos. Qui quibusdam veniam
            dicta. Perferendis nesciunt sed nulla optio voluptas temporibus, non
            corporis esse, soluta tempora iste, accusantium nihil facilis cum
            rerum consequatur repellendus quos ipsum atque sit nobis.
            Distinctio, mollitia quod. Dolores reprehenderit dolorem, nam qui
            voluptates reiciendis quo saepe veritatis, neque culpa quis tempora
            quam accusantium. Perspiciatis numquam rem, corporis eos officia
            commodi ducimus nesciunt suscipit deleniti exercitationem maxime
            libero eaque! Autem commodi error corrupti fuga voluptatibus
            doloribus, cumque est tenetur temporibus quod necessitatibus
            excepturi architecto harum ipsum illum cum quo obcaecati dicta
            iusto! Veniam, mollitia! Sapiente tempore autem suscipit excepturi
            laboriosam ratione enim rem repellendus? Et asperiores omnis minus
            fugiat similique sint, vero debitis, dignissimos ea provident
            possimus molestiae!
          </div>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default Home;
