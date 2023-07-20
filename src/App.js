import "./App.css";
import Products from "./Components/Products/Products";
import Nav from "./Components/Nav/Nav";
import { Button } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import { createContext, useState } from "react";
import About from "./Components/About/About";

export const UserContext = createContext();

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    added: false,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    added: false,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    added: false,
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    added: false,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartCnt, setCartCnt] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [about] = useState(false);
  const [cartElements, setCartElements] = useState([]);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const removeShowCart = () => {
    setShowCart(false);
  };

  const handleCartElements = (title, imageUrl, price, added) => {
    if (added === false) {
      setCartElements([
        ...cartElements,
        { title: title, price: price, imageUrl: imageUrl, quantity: 1 },
      ]);

      for (let i = 0; i < productsArr.length; i++) {
        if (title === productsArr[i].title) {
          productsArr[i].added = true;
        }
      }

      setTimeout(() => {
        alert("Item Added to Cart Successfully!!!");
      }, 300);
    } else {
      alert("Item Already Added!");
    }
  };

  // return <RouterProvider router={router} />;

  return (
    <>
      <UserContext.Provider
        value={{
          cartCnt: cartCnt,
          setCartCnt: setCartCnt,
          totalCost: totalCost,
          setTotalCost: setTotalCost,
          setCartElements: setCartElements,
          productsArr: productsArr,
        }}
      >
        <Nav handleShowCart={handleShowCart} />
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
        <Products
          productsArr={productsArr}
          handleCartElements={handleCartElements}
        />
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
        {showCart && (
          <Cart removeShowCart={removeShowCart} cartElements={cartElements} />
        )}
        {about && <About />}
      </UserContext.Provider>
    </>
  );
}

export default App;
