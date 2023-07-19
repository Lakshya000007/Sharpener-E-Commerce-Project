import "./App.css";
import Products from "./Components/Products/Products";
import Nav from "./Components/Nav/Nav";
import { Button } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const removeShowCart = () => {
    setShowCart(false);
  };

  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Nav handleShowCart={handleShowCart} />
      <div
        style={{ marginTop: ".25vh", height: "25vh", backgroundColor: "grey" }}
      >
        <center style={{ fontSize: "6rem", color: "white" }}>
          The Generics
        </center>
      </div>
      <Products productsArr={productsArr} />
      <center style={{ marginTop: "2rem" }}>
        <Button
          onClick={() => {
            setShowCart(true);
          }}
          variant="secondary"
          style={{ color: "cyan", marginBottom: "1rem" }}
        >
          See the Cart
        </Button>
      </center>
      <Footer />
      {showCart && <Cart removeShowCart={removeShowCart} />}
    </>
  );
}

export default App;
